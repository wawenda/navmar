export const locales = ['tr', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'tr';

export const translations = {
  tr: () => import('./translations/tr.json').then(m => m.default),
  en: () => import('./translations/en.json').then(m => m.default),
} as const;

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}


