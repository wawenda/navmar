'use client';

import Image from 'next/image';

const references = [
  {
    name: 'İSDEMİR',
    description: 'Demir Çelik Sanayi',
    logo: '/references/isdemir.jpg',
  },
  {
    name: 'ERDEMİR',
    description: 'Ereğli Demir Çelik',
    logo: '/references/erdemir.png',
  }
];

export default function ReferencesCarousel() {
  return (
    <div className="w-full py-8 overflow-hidden">
      {/* References Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-4">
        {references.map((reference, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Circular Logo Container */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Animated Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"></div>
              
              {/* Logo Circle */}
              <div className="relative w-full h-full rounded-full bg-white shadow-2xl group-hover:shadow-accent/30 transition-all duration-500 border-4 border-slate-100 group-hover:border-accent/20 overflow-hidden group-hover:scale-105 transform">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50"></div>
                
                {/* Logo Image */}
                <div className="relative w-full h-full p-10 md:p-12 flex items-center justify-center">
                  <Image
                    src={reference.logo}
                    alt={reference.name}
                    fill
                    className="object-contain p-8 md:p-10"
                    sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                  />
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full animate-pulse delay-75"></div>
            </div>

            {/* Company Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {reference.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {reference.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="flex items-center justify-center mt-12">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
      </div>
    </div>
  );
}
