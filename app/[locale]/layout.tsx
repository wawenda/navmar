import { ReactNode } from 'react';
import { Locale } from '@/lib/i18n';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: Locale };
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-0 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

