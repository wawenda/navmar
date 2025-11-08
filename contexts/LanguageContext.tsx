'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, defaultLocale, isValidLocale, translations } from '@/lib/i18n';

type Translations = typeof import('@/lib/translations/tr.json');

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
  translations: Translations | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translationsData, setTranslationsData] = useState<Translations | null>(null);

  // Extract locale from pathname and load translations
  useEffect(() => {
    const pathLocale = pathname.split('/')[1];
    if (isValidLocale(pathLocale)) {
      setLocaleState(pathLocale);
      // Save to localStorage and cookie
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', pathLocale);
        // Sync with cookie
        document.cookie = `preferredLanguage=${pathLocale}; path=/; max-age=${60 * 60 * 24 * 365}; sameSite=lax`;
      }
      // Load translations immediately
      translations[pathLocale]().then(setTranslationsData).catch(() => {
        // Fallback to default if translation fails
        translations[defaultLocale]().then(setTranslationsData);
      });
    } else {
      // Check cookie first (set by middleware), then localStorage
      let localeToUse = defaultLocale;
      if (typeof window !== 'undefined') {
        const cookieMatch = document.cookie.match(/preferredLanguage=([^;]+)/);
        const cookieLocale = cookieMatch ? cookieMatch[1] : null;
        const savedLocale = cookieLocale || localStorage.getItem('preferredLanguage');
        
        if (savedLocale && isValidLocale(savedLocale)) {
          localeToUse = savedLocale;
        }
        
        setLocaleState(localeToUse);
        // Load translations
        translations[localeToUse]().then(setTranslationsData).catch(() => {
          translations[defaultLocale]().then(setTranslationsData);
        });
      }
    }
  }, [pathname]);

  const setLocale = (newLocale: Locale) => {
    // Save to localStorage and cookie
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLocale);
      // Set cookie for middleware
      document.cookie = `preferredLanguage=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    }
    const currentPath = pathname.replace(`/${locale}`, '').replace(/^\/+/, '');
    router.push(`/${newLocale}${currentPath ? `/${currentPath}` : ''}`);
  };

  const t = (key: string): any => {
    if (!translationsData) return key;
    const keys = key.split('.');
    let value: any = translationsData;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, translations: translationsData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

