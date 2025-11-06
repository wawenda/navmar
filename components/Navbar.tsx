"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { nameTR: "Ana Sayfa", nameEN: "Home", href: "/" },
    { nameTR: "Hizmetler", nameEN: "Services", href: "/hizmetler" },
    { nameTR: "Limanlar", nameEN: "Ports", href: "/limanlar" },
    { nameTR: "Hakkımızda", nameEN: "About Us", href: "/hakkimizda" },
    { nameTR: "İletişim", nameEN: "Contact", href: "/iletisim" },
  ];

  return (
    <nav 
      className="text-white fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Ship Design */}
          <Link 
            href="/" 
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-300 group"
          >
            {/* Ship Container with Logo */}
            <div className="relative w-16 h-16 flex-shrink-0">
              {/* Ship Silhouette Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
                  {/* Ship body */}
                  <path d="M20,70 L25,50 L30,50 L30,40 L70,40 L70,50 L75,50 L80,70 Z" 
                        fill="currentColor" className="text-accent" />
                  {/* Ship deck */}
                  <path d="M35,40 L40,25 L60,25 L65,40 Z" 
                        fill="currentColor" className="text-accent" />
                  {/* Bridge */}
                  <rect x="45" y="18" width="10" height="7" 
                        fill="currentColor" className="text-accent" />
                  {/* Waves */}
                  <path d="M15,72 Q25,76 35,72 Q45,68 55,72 Q65,76 75,72 Q85,68 95,72" 
                        stroke="currentColor" className="text-blue-300" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </div>
              
              {/* Logo in front */}
              <div className="absolute inset-0 flex items-center justify-center z-10 p-2">
                <div className="bg-white rounded-lg p-1.5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo.png"
                    alt="Navmar Agency"
                    width={44}
                    height={44}
                    className="w-11 h-11 object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight whitespace-nowrap">
                NAVMAR
              </span>
              <span className="text-[11px] md:text-xs font-semibold text-accent tracking-wider uppercase whitespace-nowrap">
                {language === 'tr' ? 'Gemi Acenteliği' : 'Shipping Agency'}
              </span>
            </div>
          </Link>






          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {language === 'tr' ? item.nameTR : item.nameEN}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="ml-2 flex items-center gap-1 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  language === 'tr'
                    ? 'bg-accent text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-accent text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
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
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'tr' ? item.nameTR : item.nameEN}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/20">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  language === 'tr'
                    ? 'bg-accent text-primary'
                    : 'bg-white/10 text-white/80'
                }`}
              >
                Türkçe
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-accent text-primary'
                    : 'bg-white/10 text-white/80'
                }`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


