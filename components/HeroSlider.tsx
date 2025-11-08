"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const slideImages = [
  "/gallery/ship-1.jpg",
  "/gallery/ship-3.jpeg",
  "/gallery/ship-4.jpeg",
  "/gallery/ship-5.jpeg",
  "/gallery/ship-6.jpeg",
  "/gallery/ship-7.jpeg",
];

export default function HeroSlider() {
  const { locale, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Get slides from translations
  const getSlides = () => {
    const slidesData = t('home.hero.slides');
    if (Array.isArray(slidesData) && slidesData.length > 0) {
      return slidesData.map((slide: any, index: number) => ({
        image: slideImages[index] || slideImages[0],
        title: slide?.title || '',
        subtitle: slide?.subtitle || '',
        description: slide?.description || '',
      }));
    }
    // Fallback to default slides if translations not loaded yet
    return [
      { image: slideImages[0], title: '', subtitle: '', description: '' },
      { image: slideImages[1], title: '', subtitle: '', description: '' },
      { image: slideImages[2], title: '', subtitle: '', description: '' },
      { image: slideImages[3], title: '', subtitle: '', description: '' },
      { image: slideImages[4], title: '', subtitle: '', description: '' },
    ];
  };

  const slides = getSlides();

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
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

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  if (slides.length === 0) return null;

  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden mt-20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
        <div className="text-white max-w-2xl">
          <div className="mb-3 overflow-hidden">
            <h1 
              key={`title-${currentSlide}`}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 animate-slide-up"
            >
              {slides[currentSlide]?.title}
            </h1>
          </div>
          
          <div className="mb-4 overflow-hidden">
            <p 
              key={`subtitle-${currentSlide}`}
              className="text-lg md:text-xl text-accent font-semibold mb-3 animate-slide-up-delay"
            >
              {slides[currentSlide]?.subtitle}
            </p>
          </div>
          
          <div className="mb-6 overflow-hidden">
            <p 
              key={`desc-${currentSlide}`}
              className="text-base md:text-lg text-white/90 animate-slide-up-delay-2"
            >
              {slides[currentSlide]?.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-3">
            <Link
              href={`/${locale}/iletisim`}
              className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
            >
              {t('home.hero.buttons.getQuote')}
            </Link>
            <Link
              href={`/${locale}/hizmetler`}
              className="inline-block border-2 border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-200 text-center"
            >
              {t('home.hero.buttons.services')}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-200 z-10 hover:scale-110 items-center justify-center"
        aria-label={t('home.hero.ariaLabels.prevSlide')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-200 z-10 hover:scale-110 items-center justify-center"
        aria-label={t('home.hero.ariaLabels.nextSlide')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-accent w-12 h-3"
                : "bg-white/50 hover:bg-white/70 w-3 h-3"
            }`}
            aria-label={t('home.hero.ariaLabels.goToSlide').replace('{index}', String(index + 1))}
          />
        ))}
      </div>

      {/* Smooth Wave Bottom Border - Maritime Theme */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none z-10">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 20 Q150 0, 300 20 T600 20 T900 20 T1200 20 V40 H0 V20" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
