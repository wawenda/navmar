'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';

/**
 * Client component that sets the HTML lang and dir attributes based on the current locale in the URL
 * This ensures SEO-friendly language attribute and RTL support for Arabic
 */
export default function LangAttributeSetter() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const pathLocale = pathname.split('/')[1];
      if (isValidLocale(pathLocale)) {
        document.documentElement.lang = pathLocale;
        // Set direction: LTR for all languages
        document.documentElement.dir = 'ltr';
      }
    }
  }, [pathname]);

  return null;
}

