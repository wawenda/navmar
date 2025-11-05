import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "Navmar Agency | Gemi Acenteliği ve Shipping Hizmetleri",
  description:
    "Navmar Agency, liman operasyonları, gemi acenteliği ve gümrük süreçlerinde 7/24 profesyonel destek sunar.",
  openGraph: {
    title: "Navmar Agency | Gemi Acenteliği ve Shipping Hizmetleri",
    description:
      "Navmar Agency, liman operasyonları, gemi acenteliği ve gümrük süreçlerinde 7/24 profesyonel destek sunar.",
  },
};

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Gemi Acenteliği",
      description: "Tüm gemi işlemleriniz için güvenilir ve hızlı acentelik hizmetleri.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Liman Operasyonları",
      description: "Liman süreçlerinizi kesintisiz ve sorunsuz şekilde yönetiyoruz.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Gümrük ve Evrak Takibi",
      description: "Gümrük işlemlerinizi hızlı ve eksiksiz bir şekilde hallediyor, evraklarınızı takip ediyoruz.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Yakıt & Tedarik",
      description: "Yakıt temini ve gemiler için gerekli tüm tedarik hizmetlerini sağlıyoruz.",
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
              <p className="text-sm text-gray-600 font-medium">Kesintisiz Hizmet</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</h3>
              <p className="text-sm text-gray-600 font-medium">Başarılı Operasyon</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">İSK</h3>
              <p className="text-sm text-gray-600 font-medium">İskenderun Limanı</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</h3>
              <p className="text-sm text-gray-600 font-medium">Yıllık Tecrübe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Denizcilik sektöründe ihtiyacınız olan tüm profesyonel hizmetler
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
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Neden Navmar Agency?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">7/24 Hizmet</h3>
              <p className="text-gray-600">
                Her an ulaşılabilir, kesintisiz destek sağlıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Tecrübeli Ekip</h3>
              <p className="text-gray-600">
                Denizcilik sektöründe uzman ve deneyimli profesyoneller.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Hızlı Çözümler</h3>
              <p className="text-gray-600">
                Acil durumlar için hızlı ve etkili çözüm üretiyoruz.
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
              Galeri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Denizcilik operasyonlarımızdan görüntüler
            </p>
          </div>
          <GallerySection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Denizcilik İşlemleriniz İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Size özel çözümler sunmak için hazırız. Detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            İletişim Formu
          </Link>
        </div>
      </section>
    </>
  );
}


