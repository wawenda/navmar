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

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
  initialTranslations?: Translations | null;
}

export function LanguageProvider({ children, initialLocale, initialTranslations }: LanguageProviderProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Get initial locale from pathname immediately (synchronous)
  const getInitialLocale = (): Locale => {
    if (typeof window === 'undefined') return initialLocale || defaultLocale;
    const pathLocale = pathname.split('/')[1];
    if (isValidLocale(pathLocale)) {
      return pathLocale;
    }
    // Check cookie first (set by middleware), then localStorage
    const cookieMatch = document.cookie.match(/preferredLanguage=([^;]+)/);
    const cookieLocale = cookieMatch ? cookieMatch[1] : null;
    const savedLocale = cookieLocale || localStorage.getItem('preferredLanguage');
    return (savedLocale && isValidLocale(savedLocale)) ? savedLocale : (initialLocale || defaultLocale);
  };

  const [locale, setLocaleState] = useState<Locale>(initialLocale || getInitialLocale());
  const [translationsData, setTranslationsData] = useState<Translations | null>(initialTranslations || null);
  const [isLoading, setIsLoading] = useState(!initialTranslations);

  // Load translations immediately on mount and when locale changes
  useEffect(() => {
    // If we already have initial translations, skip loading
    if (initialTranslations) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const currentLocale = getInitialLocale();
    setLocaleState(currentLocale);
    
    // Save to localStorage and cookie
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', currentLocale);
      document.cookie = `preferredLanguage=${currentLocale}; path=/; max-age=${60 * 60 * 24 * 365}; sameSite=lax`;
    }
    
    // Load translations immediately
    translations[currentLocale]()
      .then((data) => {
        setTranslationsData(data);
        setIsLoading(false);
      })
      .catch(() => {
        // Fallback to default if translation fails
        translations[defaultLocale]()
          .then((data) => {
            setTranslationsData(data);
            setIsLoading(false);
          });
      });
  }, [pathname, initialTranslations]);

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
    // If translations are not loaded yet, return empty string to prevent key flash
    if (!translationsData || isLoading) return '';
    const keys = key.split('.');
    let value: any = translationsData;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return '';
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

