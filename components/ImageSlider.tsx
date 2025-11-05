"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/ship-1.jpeg",
    title: "Profesyonel Gemi Acenteliği",
    description: "Denizcilik sektöründe güvenilir çözüm ortağınız",
  },
  {
    image: "/ship-2.jpeg",
    title: "Liman Operasyonları",
    description: "Türkiye'nin önde gelen limanlarında kesintisiz hizmet",
  },
  {
    image: "/ship-3.jpeg",
    title: "7/24 Destek",
    description: "Her an ulaşılabilir, her zaman çözüm odaklı",
  },
  {
    image: "/ship-4.jpeg",
    title: "Gümrük ve Evrak Hizmetleri",
    description: "Hızlı ve eksiksiz dokümantasyon desteği",
  },
  {
    image: "/ship-5.jpeg",
    title: "Yakıt ve Tedarik",
    description: "Gemileriniz için tüm tedarik ihtiyaçları",
  },
  {
    image: "/ship-6.jpeg",
    title: "Deneyimli Ekip",
    description: "Uzman kadromuzla profesyonel hizmet",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // 10 saniye sonra otomatik oynatmayı tekrar başlat
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
              {slide.title}
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-delay">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



