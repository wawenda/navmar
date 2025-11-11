'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-primary via-primary to-primary/90 text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 group">
              {/* Ship-themed logo container */}
              <div className="relative w-16 h-16 flex-shrink-0">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 blur-lg group-hover:blur-xl transition-all"></div>
                
                {/* Ship hull background - More prominent */}
                <div className="absolute inset-0 flex items-center justify-center opacity-65 group-hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Main hull with depth */}
                    <path d="M20,75 Q20,55 28,52 L28,42 Q28,38 32,38 L68,38 Q72,38 72,42 L72,52 Q80,55 80,75 Z" 
                          fill="currentColor" className="text-accent"/>
                    {/* Hull shine */}
                    <path d="M25,70 Q25,58 30,55 L30,43 L35,43 L35,55 Q28,58 28,70 Z" 
                          fill="currentColor" className="text-accent/30"/>
                    {/* Bridge structure */}
                    <path d="M32,38 L37,22 L63,22 L68,38 Z" 
                          fill="currentColor" className="text-accent"/>
                    {/* Bridge windows */}
                    <rect x="40" y="26" width="4" height="6" rx="1" fill="currentColor" className="text-white/20"/>
                    <rect x="48" y="26" width="4" height="6" rx="1" fill="currentColor" className="text-white/20"/>
                    <rect x="56" y="26" width="4" height="6" rx="1" fill="currentColor" className="text-white/20"/>
                    {/* Chimney */}
                    <rect x="46" y="14" width="8" height="8" rx="1" fill="currentColor" className="text-accent"/>
                    {/* Waves at bottom */}
                    <path d="M20,75 Q25,73 30,75 Q35,77 40,75 Q45,73 50,75 Q55,77 60,75 Q65,73 70,75 Q75,77 80,75" 
                          stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent/30"/>
                  </svg>
                </div>

                {/* Main logo */}
                <div className="absolute inset-2 bg-gradient-to-br from-white via-white to-white rounded-[40%] shadow-xl group-hover:shadow-accent/30 group-hover:scale-105 transition-all flex items-center justify-center" style={{borderRadius: '50% 50% 45% 45%'}}>
                  <div className="relative w-full h-full p-2">
                    <Image
                      src="/logo.png"
                      alt="Navmar Shipping Agency"
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="64px"
                    />
                  </div>
                </div>

              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">{t('brand.name')}</h3>
                <p className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {t('brand.tagline')}
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/navmaragency" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/navmar-agency" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/905056453119" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { key: 'home', href: '/' },
                { key: 'services', href: '/hizmetler' },
                { key: 'ports', href: '/limanlar' },
                { key: 'about', href: '/hakkimizda' },
                { key: 'contact', href: '/iletisim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={`/${locale}${link.href}`} className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all"></span>
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('footer.contact')}
            </h4>
            <div className="space-y-4 text-sm">
              {/* Telefonlar */}
              <div>
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-semibold">
                  {t('contact.info.phones')}
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>
                    <a href="tel:+905056453119" className="hover:text-accent transition-colors block">
                      +90 (505) 645 31 19
                    </a>
                    <p className="text-xs text-accent">{t('contact.info.phone')}</p>
                  </li>
                  <li>
                    <a href="tel:+905455476013" className="hover:text-accent transition-colors block">
                      +90 (545) 547 60 13
                    </a>
                    <p className="text-xs text-accent">{t('footer.service247')}</p>
                  </li>
                  <li>
                    <a href="tel:+903265033119" className="hover:text-accent transition-colors block">
                      +90 (326) 503 31 19
                    </a>
                    <p className="text-xs text-accent">{t('contact.info.phoneFixed')}</p>
                  </li>
                </ul>
              </div>
              {/* E-postalar */}
              <div>
                <p className="text-xs text-accent uppercase tracking-wider mb-2 font-semibold">
                  {t('contact.info.emails')}
                </p>
                <ul className="space-y-1 text-white/70">
                  <li>
                    <a href="mailto:info@navmaragency.com" className="hover:text-accent transition-colors">
                      info@navmaragency.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:navmar@navmaragency.com" className="hover:text-accent transition-colors">
                      navmar@navmaragency.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('footer.address')}
            </h4>
            <div className="text-sm text-white/70 space-y-2">
              <p className="leading-relaxed">
                Mustafa Kemal {t('footer.district')}<br />
                İbrahim Karaoğlanoğlu Cd. No: 192/1<br />
                Amanos Rezidans<br />
                31200 İskenderun / Hatay, {t('footer.country')}
              </p>
              <div className="inline-block bg-accent/20 text-accent px-3 py-1.5 rounded-lg text-xs font-semibold mt-2">
                ⏰ {t('footer.nonStopService')}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} NAVMAR {t('brand.tagline')}. {t('footer.allRightsReserved')}.</p>
            <p className="text-xs">{t('footer.portsFooter')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


