"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale: language, setLocale: setLanguage, t } = useLanguage();

  const navigation = [
    { key: "home", href: "/" },
    { key: "services", href: "/hizmetler" },
    { key: "ports", href: "/limanlar" },
    { key: "about", href: "/hakkimizda" },
    { key: "contact", href: "/iletisim" },
  ];

  // Helper function to add locale to href
  const getLocalizedHref = (href: string) => {
    return `/${language}${href === '/' ? '' : href}`;
  };

  // Helper function to check if current path matches nav item
  const isActivePath = (href: string) => {
    const localizedHref = `/${language}${href === '/' ? '' : href}`;
    return pathname === localizedHref;
  };

  return (
    <nav 
      className="text-white fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo - Simple Design */}
          <Link 
            href={getLocalizedHref("/")}
            className="flex items-center gap-2.5 px-3 py-2 transition-all duration-300 group relative z-10"
          >
            {/* Logo Icon - With white background */}
            <div className="bg-white p-1 md:p-1.5 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Navmar Agency"
                width={64}
                height={64}
                className="transition-transform duration-300 group-hover:rotate-3 w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            
            {/* Brand Text - Modern & Compact */}
            <div className="flex flex-col leading-none justify-center min-w-0">
              <span className="text-sm md:text-lg lg:text-xl font-extrabold text-white tracking-tight whitespace-nowrap">
                NAVMAR
              </span>
              <span className="text-[9px] md:text-[10px] lg:text-xs font-bold text-accent tracking-wider uppercase whitespace-nowrap">
                {t('brand.tagline') || (language === 'tr' ? 'Gemi Acenteliği' : 'Shipping Agency')}
              </span>
            </div>
          </Link>






          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActivePath(item.href)
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="ml-2 flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  language === 'tr'
                    ? 'bg-accent text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Image src="/flags/tr.svg" alt="TR" width={20} height={15} className="w-5 h-4" />
                <span>TR</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  language === 'en'
                    ? 'bg-accent text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Image src="/flags/en.svg" alt="EN" width={20} height={15} className="w-5 h-4" />
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  language === 'ru'
                    ? 'bg-accent text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Image src="/flags/ru.svg" alt="RU" width={20} height={15} className="w-5 h-4" />
                <span>RU</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActivePath(item.href)
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/20 flex-wrap">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  language === 'tr'
                    ? 'bg-accent text-primary'
                    : 'bg-white/10 text-white/80'
                }`}
              >
                <Image src="/flags/tr.svg" alt="TR" width={24} height={18} className="w-6 h-5" />
                <span>Türkçe</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  language === 'en'
                    ? 'bg-accent text-primary'
                    : 'bg-white/10 text-white/80'
                }`}
              >
                <Image src="/flags/en.svg" alt="EN" width={24} height={18} className="w-6 h-5" />
                <span>English</span>
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  language === 'ru'
                    ? 'bg-accent text-primary'
                    : 'bg-white/10 text-white/80'
                }`}
              >
                <Image src="/flags/ru.svg" alt="RU" width={24} height={18} className="w-6 h-5" />
                <span>Русский</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


