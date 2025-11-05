import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              {/* Logo */}
              <div className="bg-white p-2.5 rounded-lg shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Navmar Agency"
                  width={55}
                  height={55}
                />
              </div>
              
              {/* Brand Text */}
              <div className="flex flex-col leading-tight">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  NAVMAR
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base font-bold text-accent tracking-[0.2em] uppercase">
                    Agency
                  </span>
             
                </div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Güvenilir gemi acenteliği hizmetleri ile denizcilik sektöründe profesyonel çözüm ortağınız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-white/80 hover:text-accent transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/limanlar" className="text-white/80 hover:text-accent transition-colors">
                  Limanlar
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-white/80 hover:text-accent transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-white/80 hover:text-accent transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">İletişim</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+90 (212) 555 0000</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@navmaragency.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
            <p className="text-accent text-xs mt-4 font-semibold">7/24 Hizmet</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Navmar Agency. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}


