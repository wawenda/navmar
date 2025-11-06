'use client';

import { useLanguage } from "@/contexts/LanguageContext";

export default function Hizmetler() {
  const { language } = useLanguage();
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      titleTR: "Tayfa Değişimi",
      titleEN: "Crew Change",
      descriptionTR:
        "Mürettebat değişikliklerini sorunsuz ve hızlı bir şekilde gerçekleştiriyoruz. Havaalanı transferleri, vize işlemleri ve tüm resmi prosedürleri koordine ediyoruz.",
      descriptionEN:
        "We carry out crew changes smoothly and quickly. We coordinate airport transfers, visa procedures, and all official processes.",
      featuresTR: [
        "Havaalanı transfer hizmetleri",
        "Vize ve pasaport işlemleri",
        "Gemi ile personel koordinasyonu",
        "7/24 acil tayfa değişimi desteği",
      ],
      featuresEN: [
        "Airport transfer services",
        "Visa and passport procedures",
        "Ship-crew coordination",
        "7/24 emergency crew change support",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Personel Sağlık Kuruluşu Transferi",
      description:
        "Mürettebatınızın sağlık ihtiyaçları için hastane ve sağlık kuruluşlarına güvenli transfer hizmeti sunuyoruz. Acil ve planlı sağlık hizmetleri koordinasyonu yapıyoruz.",
      features: [
        "Hastane transfer hizmetleri",
        "Acil sağlık durumları koordinasyonu",
        "Doktor randevu organizasyonu",
        "Sağlık raporları takibi",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      title: "Kumanya, Yedek Parça ve Tatlı Su İkmali",
      description:
        "Gemilerinizin kumanya, gıda, yedek parça ve tatlı su ihtiyaçlarını karşılıyoruz. Kaliteli ürünler ve zamanında teslimat garantisi sunuyoruz.",
      features: [
        "Taze gıda ve kumanya temini",
        "Yedek parça tedariki",
        "Tatlı su ikmali",
        "Gemi malzemeleri ve ekipmanları",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Yedek Parça Gümrük Prosedürleri",
      description:
        "Yedek parçalarınızın gümrük işlemlerini hızlı ve eksiksiz bir şekilde yönetiyoruz. Tüm evrak ve prosedürleri takip ederek, zamanında teslim alınmasını sağlıyoruz.",
      features: [
        "Gümrük beyannamesi hazırlama",
        "Yedek parça ithalat işlemleri",
        "Geçici ithalat prosedürleri",
        "Belge ve evrak takibi",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Seyir Neşriyatları Temini",
      description:
        "Gemilerinizin ihtiyaç duyduğu güncel deniz haritaları, seyir yayınları ve nautical publikasyonların teminini sağlıyoruz.",
      features: [
        "Güncel deniz haritaları",
        "Seyir yayınları temini",
        "Nautical publikasyonlar",
        "ADMIRALTY ve diğer yayınlar",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Gemiye Nakit ve Yakıt Tedariki",
      description:
        "Gemilerinize güvenli nakit tedariki ve yakıt ikmali hizmeti sunuyoruz. Rekabetçi fiyatlar ve zamanında teslimat ile operasyonlarınızı kesintisiz sürdürmenizi sağlıyoruz.",
      features: [
        "Güvenli nakit tedariki (Cash to Master)",
        "Yakıt (bunker) temini",
        "Rekabetçi yakıt fiyatları",
        "Acil durum yakıt desteği",
      ],
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
      title: "Gemiden Çöp ve Atık Alımı",
      description:
        "Çevre düzenlemelerine uygun olarak gemilerden çöp ve atık malzemelerin toplanması ve bertaraf edilmesi hizmetini profesyonelce sunuyoruz.",
      features: [
        "MARPOL standartlarına uygun atık toplama",
        "Katı atık alımı",
        "Sıvı atık (bilge, slop) alımı",
        "Atık bertaraf belgelendirmesi",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 pt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Husbandry Hizmetlerimiz</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            NAVMAR Gemi Acenteliği olarak gemilerinizin tüm ihtiyaçlarını özenle ve eksiksiz şekilde karşılıyoruz
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                    Özellikler
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Hizmetlerimiz Hakkında Detaylı Bilgi Almak İster misiniz?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Size özel çözümler sunmak ve sorularınızı yanıtlamak için hazırız
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            Bize Ulaşın
          </a>
        </div>
      </section>
    </>
  );
}


