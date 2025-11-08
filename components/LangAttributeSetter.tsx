'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';

/**
 * Client component that sets the HTML lang attribute based on the current locale in the URL
 * This ensures SEO-friendly language attribute that matches the displayed content
 */
export default function LangAttributeSetter() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const pathLocale = pathname.split('/')[1];
      if (isValidLocale(pathLocale)) {
        document.documentElement.lang = pathLocale;
      }
    }
  }, [pathname]);

  return null;
}

