"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Limanlar", href: "/limanlar" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav 
      className="text-white fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Premium Design */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 group"
          >
            {/* Logo Icon */}
            <div className="bg-white p-1.5 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Navmar Agency"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:rotate-3 w-10 h-10 object-contain"
              />
            </div>
            
            {/* Brand Text - Modern & Compact */}
            <div className="flex flex-col leading-none justify-center min-w-0">
              <span className="text-lg md:text-xl font-extrabold text-white tracking-tight whitespace-nowrap">
                NAVMAR
              </span>
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-wider uppercase whitespace-nowrap">
                Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
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
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/90 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}


