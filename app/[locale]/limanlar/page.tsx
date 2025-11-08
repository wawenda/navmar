'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Limanlar() {
  const { locale, t } = useLanguage();
  const [hoveredPort, setHoveredPort] = useState<number | null>(null);
  
  const ports = [
    {
      key: 'iskenderun',
      image: '/port-operations.jpeg',
      color: 'from-blue-600 to-blue-800',
    },
    {
      key: 'mersin',
      image: '/port-operations.jpeg',
      color: 'from-teal-600 to-teal-800',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 pt-34 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('ports.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('ports.subtitle')}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/port-operations.jpeg"
                alt="İskenderun Liman Operasyonları"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('ports.intro.title')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('ports.intro.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-primary">{t('brand.name')} {t('brand.tagline')}</strong> olarak, {t('ports.intro.description1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('ports.intro.description2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ports Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('ports.services')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin stratejik limanlarında kesintisiz hizmet sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ports.map((port, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredPort(index)}
                onMouseLeave={() => setHoveredPort(null)}
              >
                {/* Port Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={port.image}
                    alt={t(`ports.items.${port.key}.name`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${port.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {t(`ports.items.${port.key}.name`)}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">
                          {t(`ports.items.${port.key}.city`)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ship Icon Decoration */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <svg className="w-16 h-16 text-white" viewBox="0 0 100 100">
                      <path d="M20,70 L25,50 L30,50 L30,40 L70,40 L70,50 L75,50 L80,70 Z" fill="currentColor" />
                      <path d="M35,40 L40,25 L60,25 L65,40 Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Port Details */}
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t(`ports.items.${port.key}.description`)}
                  </p>

                  {/* Services List */}
                  <div className="space-y-3">
                    {(() => {
                      const details = t(`ports.items.${port.key}.details`);
                      if (Array.isArray(details)) {
                        return details.map((detail: string, idx: number) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-3 group/item"
                            style={{ 
                              animation: hoveredPort === index ? `fadeInUp 0.3s ease-out ${idx * 0.1}s both` : 'none' 
                            }}
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5">
                              <svg
                                className="w-4 h-4 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium flex-1">{detail}</span>
                          </div>
                        ));
                      }
                      return null;
                    })()}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-2 bg-gradient-to-r ${port.color} group-hover:h-3 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-blue-900 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">2</h3>
              <p className="text-gray-600 font-medium">{t('ports.stats.activePorts')}</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-yellow-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">7/24</h3>
              <p className="text-gray-600 font-medium">{t('ports.stats.service247')}</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-600 font-medium">{t('ports.stats.reliable')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('ports.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('ports.cta.subtitle')}
          </p>
          <Link
            href={`/${locale}/iletisim`}
            className="inline-block bg-accent text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('ports.cta.button')}
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
