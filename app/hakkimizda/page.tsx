import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "NAVMAR Gemi Acenteliği, İskenderun Limanı'nda yılların tecrübesi ile güvenilir husbandry hizmetleri sunan profesyonel bir şirkettir. 7/24 kesintisiz destek.",
  openGraph: {
    title: "Hakkımızda | Navmar Agency",
    description:
      "NAVMAR Gemi Acenteliği, İskenderun Limanı'nda yılların tecrübesi ile güvenilir husbandry hizmetleri sunan profesyonel bir şirkettir.",
  },
};

export default function Hakkimizda() {
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
      title: "Misyonumuz",
      description:
        "Denizcilik sektöründe faaliyet gösteren şirketlere en yüksek kalitede gemi acenteliği hizmetleri sunarak, operasyonlarını sorunsuz ve verimli bir şekilde yürütmelerine destek olmak. Müşterilerimizin güvenini kazanmak ve uzun vadeli iş ortaklıkları kurmak.",
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
      title: "Vizyonumuz",
      description:
        "Türkiye'nin önde gelen gemi acenteliği şirketlerinden biri olmak ve uluslararası denizcilik endüstrisinde güvenilir bir ortak olarak tanınmak. İnovasyon ve sürekli gelişim odaklı yaklaşımımızla sektörde referans bir şirket haline gelmek.",
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
      title: "Değerlerimiz",
      description:
        "Güvenilirlik, profesyonellik, şeffaflık ve müşteri memnuniyeti temel değerlerimizdir. 7/24 kesintisiz iletişim, hızlı çözüm üretme yeteneği ve etik iş anlayışımızla fark yaratıyoruz. Çalışanlarımıza değer verir, sürdürülebilir büyümeye inanırız.",
    },
  ];

  const stats = [
    { number: "15+", label: "Yıllık Tecrübe" },
    { number: "500+", label: "Başarılı Operasyon" },
    { number: "İSK", label: "İskenderun Limanı" },
    { number: "7/24", label: "Kesintisiz Hizmet" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 pt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Denizcilik sektöründe güvenilir çözüm ortağınız
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                NAVMAR Gemi Acenteliği
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">NAVMAR Gemi Acenteliği</strong>, denizcilik sektöründe 
                  yılların verdiği tecrübe ve birikimle hizmet veren profesyonel bir gemi acenteliği şirketidir. 
                  İskenderun Limanı&apos;nda kesintisiz operasyon yürütüyoruz.
                </p>
                <p>
                  Müşterilerimize en yüksek kalitede husbandry hizmetleri sunmak ve onların denizcilik operasyonlarını 
                  sorunsuz bir şekilde gerçekleştirmelerine yardımcı olmak için kurulduk. Deneyimli ekibimiz, 
                  güçlü yerel bağlantılarımız ve 7/24 kesintisiz iletişim altyapımız ile sektörde fark yaratıyoruz.
                </p>
                <p>
                  Tayfa değişimi, kumanya ikmali, yedek parça gümrük prosedürleri, seyir neşriyatları temini, 
                  yakıt ve nakit tedariki, atık alımı gibi tüm husbandry hizmetlerinde kapsamlı çözümler sunuyoruz. 
                  Her müşterimizin özel ihtiyaçlarını anlayarak, onlara özel çözümler geliştiriyoruz.
                </p>
                <p>
                  <strong className="text-accent">Güvenilirlik, profesyonellik ve müşteri memnuniyeti</strong> 
                  {" "}bizim için en önemli ilkelerdir. Bu değerlerle hareket ederek, müşterilerimizle 
                  uzun vadeli ve karşılıklı güvene dayalı iş ortaklıkları kuruyoruz.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/ship-7.jpeg"
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
                    {stat.label}
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
              Misyon, Vizyon ve Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bizi yönlendiren ilkeler ve hedeflerimiz
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
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Deneyimli Ekip",
                description:
                  "Sektörde yılların verdiği bilgi ve tecrübeye sahip profesyonel kadromuz.",
              },
              {
                title: "7/24 İletişim",
                description:
                  "Günün her saati ulaşılabilir olmak ve anında çözüm üretmek.",
              },
              {
                title: "İskenderun Limanı Uzmanlığı",
                description:
                  "İskenderun Limanı'nda derin bilgi ve deneyimle kesintisiz hizmet.",
              },
              {
                title: "Güvenilirlik",
                description:
                  "Şeffaf ve dürüst iş anlayışımızla uzun vadeli ortaklıklar.",
              },
              {
                title: "Hızlı Çözümler",
                description:
                  "Acil durumlar için etkili ve hızlı aksiyon alma yeteneği.",
              },
              {
                title: "Kapsamlı Hizmetler",
                description:
                  "Denizcilik operasyonlarınız için ihtiyaç duyduğunuz tüm hizmetler.",
              },
            ].map((item, index) => (
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
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
            Bizimle Çalışmak İster misiniz?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Denizcilik operasyonlarınız için güvenilir bir ortak arıyorsanız, doğru yerdesiniz
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </>
  );
}


