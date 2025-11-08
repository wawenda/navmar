import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale, type Locale } from './lib/i18n';

// Function to get locale from Accept-Language header
function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  
  // Parse Accept-Language header (e.g., "en-US,en;q=0.9,tr;q=0.8")
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1] || '1');
      return { locale: locale.split('-')[0].toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find the first supported locale
  for (const { locale } of languages) {
    if (isValidLocale(locale)) {
      return locale;
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in pathname, redirect to preferred locale
  if (!pathnameHasLocale) {
    // Priority: 1. Cookie, 2. Accept-Language header, 3. Default
    const cookieLocale = request.cookies.get('preferredLanguage')?.value;
    let locale = defaultLocale;
    
    if (cookieLocale && isValidLocale(cookieLocale)) {
      locale = cookieLocale;
    } else {
      // Get locale from browser's Accept-Language header
      const acceptLanguage = request.headers.get('accept-language');
      locale = getLocaleFromAcceptLanguage(acceptLanguage);
    }
    
    const newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(new URL(newPath, request.url));
    
    // Set cookie with detected locale
    response.cookies.set('preferredLanguage', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax',
    });
    
    return response;
  }

  // Set cookie based on current locale in path
  const currentLocale = pathname.split('/')[1];
  if (isValidLocale(currentLocale)) {
    const response = NextResponse.next();
    response.cookies.set('preferredLanguage', currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
