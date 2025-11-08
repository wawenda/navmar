'use client';

import Link from "next/link";
import Image from "next/image";
import ReferencesCarousel from "@/components/ReferencesCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hakkimizda() {
  const { locale, t } = useLanguage();
  
  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      key: 'mission',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      key: 'vision',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      key: 'values',
    },
  ];

  const stats = [
    { number: "15+", key: 'years' },
    { number: "500+", key: 'operations' },
    { number: "İSK", key: 'port' },
    { number: "7/24", key: 'service247' },
  ];

  const whyUsItems = [
    { key: 'experienced' },
    { key: 'communication' },
    { key: 'expertise' },
    { key: 'reliability' },
    { key: 'speed' },
    { key: 'comprehensive' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 pt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('about.company.name')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">{t('about.company.name')}</strong>, {t('about.company.description1')}
                </p>
                <p>
                  {t('about.company.description2')}
                </p>
                <p>
                  {t('about.company.description3')}
                </p>
                <p>
                  <strong className="text-accent">{t('about.mission.values.description').split('.')[0]}</strong>
                  {" "}{t('about.company.description4')}
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/gallery/ship-9.jpg"
                  alt="Navmar Agency Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t(`about.stats.${stat.key}`)}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.mission.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-accent mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {t(`about.mission.${value.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`about.mission.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('about.references.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.references.subtitle')}
            </p>
          </div>
          
          <ReferencesCarousel />

          <div className="text-center mt-16 pt-8 border-t border-slate-200 max-w-4xl mx-auto">
            <p className="text-gray-600 italic text-lg">
              &quot;{t('about.references.quote')}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('about.whyUs.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {t(`about.whyUs.items.${item.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">{t(`about.whyUs.items.${item.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <Link
            href={`/${locale}/iletisim`}
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
