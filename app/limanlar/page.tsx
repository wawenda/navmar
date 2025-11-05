import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hizmet Verdiğimiz Limanlar",
  description:
    "NAVMAR Gemi Acenteliği olarak İskenderun Limanı'nda 7/24 kesintisiz profesyonel hizmet sunuyoruz.",
  openGraph: {
    title: "Hizmet Verdiğimiz Limanlar | Navmar Agency",
    description:
      "NAVMAR Gemi Acenteliği olarak İskenderun Limanı'nda 7/24 kesintisiz profesyonel hizmet sunuyoruz.",
  },
};

export default function Limanlar() {
  const ports = [
    {
      name: "İskenderun Limanı",
      city: "Hatay",
      description: "Akdeniz'in stratejik ticaret limanı, Türkiye'nin en önemli konteyner ve genel kargo limanlarından biri",
      details: [
        "Konteyner operasyonları",
        "Genel kargo elleçleme",
        "Dökme yük hizmetleri",
        "7/24 gemi acenteliği",
        "Husbandry hizmetleri",
        "Gümrük prosedürleri",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 pt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hizmet Verdiğimiz Liman
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            İskenderun Limanı&apos;nda 7/24 kesintisiz profesyonel gemi acenteliği hizmeti sunuyoruz
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/port-operations.jpeg"
                alt="İskenderun Liman Operasyonları"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                İskenderun Limanı&apos;nda Uzman Hizmet
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-primary">NAVMAR Gemi Acenteliği</strong> olarak, İskenderun Limanı&apos;nda 
                gemi acenteliği ve husbandry hizmetlerinde uzmanlaşmış profesyonel bir ekibe sahibiz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bölgedeki güçlü bağlantılarımız ve deneyimli kadromuzla gemilerinizin tüm ihtiyaçlarını 
                hızlı ve güvenilir bir şekilde karşılıyoruz. Profesyonel çözümler sunmak için 7/24 hizmetinizdeyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Port Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {ports.map((port, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 border-2 border-accent/20 rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {port.name}
                  </h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {port.city}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {port.description}
                  </p>
                </div>
              </div>
              
              <div className="border-t-2 border-accent/10 pt-6 mt-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Sunduğumuz Hizmetler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {port.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <svg
                        className="w-6 h-6 text-accent flex-shrink-0"
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
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">İskenderun</h3>
              <p className="text-gray-600">Stratejik Konum</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">7/24</h3>
              <p className="text-gray-600">Kesintisiz Hizmet</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-600">Güvenilir Hizmet</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            İskenderun Limanı&apos;nda Hizmet Almak İster misiniz?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Size en iyi hizmeti sunmak için 7/24 hazırız
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors duration-200 shadow-lg"
          >
            Hemen İletişime Geçin
          </a>
        </div>
      </section>
    </>
  );
}


