'use client';

import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import GallerySection from "@/components/GallerySection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titleTR: "Gemi Acenteliği",
      titleEN: "Ship Agency",
      descriptionTR: "Tüm gemi işlemleriniz için güvenilir ve hızlı acentelik hizmetleri.",
      descriptionEN: "Reliable and fast agency services for all your ship operations.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      titleTR: "Liman Operasyonları",
      titleEN: "Port Operations",
      descriptionTR: "Liman süreçlerinizi kesintisiz ve sorunsuz şekilde yönetiyoruz.",
      descriptionEN: "Managing your port processes seamlessly and efficiently.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      titleTR: "Gümrük ve Evrak Takibi",
      titleEN: "Customs & Documentation",
      descriptionTR: "Gümrük işlemlerinizi hızlı ve eksiksiz bir şekilde hallediyor, evraklarınızı takip ediyoruz.",
      descriptionEN: "Handling your customs procedures quickly and tracking your documentation.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleTR: "Yakıt & Tedarik",
      titleEN: "Fuel & Supply",
      descriptionTR: "Yakıt temini ve gemiler için gerekli tüm tedarik hizmetlerini sağlıyoruz.",
      descriptionEN: "Providing fuel supply and all necessary provisions for vessels.",
    },
  ];

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Key Features / Stats - Premium Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">7/24</h3>
              <p className="text-sm text-gray-600 font-medium">
                {language === 'tr' ? 'Kesintisiz Hizmet' : 'Non-Stop Service'}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</h3>
              <p className="text-sm text-gray-600 font-medium">
                {language === 'tr' ? 'Başarılı Operasyon' : 'Successful Operations'}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">2</h3>
              <p className="text-sm text-gray-600 font-medium">
                {language === 'tr' ? 'Aktif Liman' : 'Active Ports'}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</h3>
              <p className="text-sm text-gray-600 font-medium">
                {language === 'tr' ? 'Yıllık Tecrübe' : 'Years Experience'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' 
                ? 'Denizcilik sektöründe ihtiyacınız olan tüm profesyonel hizmetler'
                : 'All professional services you need in the maritime sector'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {language === 'tr' ? service.titleTR : service.titleEN}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'tr' ? service.descriptionTR : service.descriptionEN}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              {language === 'tr' ? 'Tüm Hizmetleri Görüntüle' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'tr' ? 'Neden Navmar Agency?' : 'Why Navmar Agency?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {language === 'tr' ? '7/24 Hizmet' : '7/24 Service'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Her an ulaşılabilir, kesintisiz destek sağlıyoruz.'
                  : 'Always available, providing non-stop support.'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {language === 'tr' ? 'Tecrübeli Ekip' : 'Experienced Team'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Denizcilik sektöründe uzman ve deneyimli profesyoneller.'
                  : 'Expert and experienced professionals in the maritime sector.'}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {language === 'tr' ? 'Hızlı Çözümler' : 'Fast Solutions'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Acil durumlar için hızlı ve etkili çözüm üretiyoruz.'
                  : 'Providing fast and effective solutions for emergencies.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'tr' ? 'Galeri' : 'Gallery'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' 
                ? 'Denizcilik operasyonlarımızdan görüntüler'
                : 'Images from our maritime operations'}
            </p>
          </div>
          <GallerySection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'tr' 
              ? 'Denizcilik İşlemleriniz İçin Hemen İletişime Geçin'
              : 'Contact Us for Your Maritime Operations'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Size özel çözümler sunmak için hazırız. Detaylı bilgi almak için bizimle iletişime geçin.'
              : 'We are ready to provide customized solutions. Contact us for detailed information.'}
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            {language === 'tr' ? 'İletişim Formu' : 'Contact Form'}
          </Link>
        </div>
      </section>
    </>
  );
}


