'use client';

import { useState, useEffect } from 'react';

const references = [
  {
    name: 'İSDEMİR',
    description: 'Demir Çelik Sanayi',
    logo: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-lg">
        <div className="text-white text-center">
          <div className="text-3xl font-black tracking-wider">İSDEMİR</div>
          <div className="text-xs mt-1 opacity-90">Demir Çelik A.Ş.</div>
        </div>
      </div>
    ),
  },
  {
    name: 'ERDEMİR',
    description: 'Ereğli Demir Çelik',
    logo: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg">
        <div className="text-white text-center">
          <div className="text-3xl font-black tracking-wider">ERDEMİR</div>
          <div className="text-xs mt-1 opacity-90">Ereğli Demir Çelik</div>
        </div>
      </div>
    ),
  },
  {
    name: 'YAZICIOĞLU',
    description: 'Gıda Sanayi',
    logo: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 rounded-lg">
        <div className="text-white text-center">
          <div className="text-2xl font-bold">YAZICIOĞLU</div>
          <div className="text-xs mt-1 opacity-90">Gıda Sanayi</div>
        </div>
      </div>
    ),
  },
];

export default function ReferencesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % references.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-slate-200 shadow-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {references.map((reference, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center p-12 md:p-16"
            >
              <div className="w-64 h-40 md:w-80 md:h-48">
                {reference.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Önceki referans"
        >
          <svg
            className="w-5 h-5 text-primary group-hover:text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Sonraki referans"
        >
          <svg
            className="w-5 h-5 text-primary group-hover:text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {references.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-accent'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Referans ${index + 1}'e git`}
          />
        ))}
      </div>

      {/* Company Names Below */}
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-primary">
          {references[currentIndex].name}
        </p>
        <p className="text-sm text-gray-600">
          {references[currentIndex].description}
        </p>
      </div>
    </div>
  );
}

