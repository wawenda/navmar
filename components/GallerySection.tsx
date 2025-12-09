"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Galeri görselleri
const galleryImages = [
  "/gallery/ship-1.jpg",
  "/gallery/ship-2.jpg",
  "/gallery/ship-3.jpeg",
  "/gallery/ship-4.jpeg",
  "/gallery/ship-5.jpeg",
  "/gallery/ship-6.jpeg",
  "/gallery/ship-7.jpeg",
  "/gallery/ship-8.jpeg",
  "/gallery/ship-9.jpg",
  "/gallery/ship-10.jpg",
  "/gallery/ship-11.jpeg",
  "/gallery/ship-12.jpeg",
  "/gallery/ship-13.jpeg",
  "/gallery/ship-14.jpeg",
  "/gallery/ship-15.jpeg",
  "/gallery/ship-16.jpeg",
  "/gallery/ship-17.jpeg",
  "/gallery/ship-18.jpeg",
  "/gallery/iskenderun-liman.jpg",
  "/gallery/mersin-limani.jpg",
  "/gallery/seaport.jpg",
];

const ITEMS_PER_PAGE_DESKTOP = 8;

export default function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Mobil için tek görsel indexi
  const [currentPage, setCurrentPage] = useState(0); // Desktop için sayfa
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Touch/Swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE_DESKTOP);

  // Desktop için mevcut sayfadaki görseller
  const getCurrentPageImages = () => {
    const start = currentPage * ITEMS_PER_PAGE_DESKTOP;
    const end = start + ITEMS_PER_PAGE_DESKTOP;
    return galleryImages.slice(start, end);
  };

  // Mobil navigasyon
  const goToImage = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  // Desktop sayfa navigasyonu
  const goToPage = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      } else {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      }
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        goToImage("next");
      } else {
        goToImage("prev");
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowLeft" && selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        } else if (e.key === "ArrowRight" && selectedImage < galleryImages.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Body scroll lock when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const getImageAlt = (index: number) => {
    const alts = t('home.galleryImages');
    if (Array.isArray(alts) && alts[index]) {
      return alts[index];
    }
    return `Gallery image ${index + 1}`;
  };

  return (
    <>
      {/* ===== MOBİL: Tam Ekran Carousel ===== */}
      <div className="md:hidden">
        <div
          className="relative bg-black rounded-2xl overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ana Görsel */}
          <div
            className={`relative w-full aspect-[4/3] transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"
              }`}
            onClick={() => setSelectedImage(currentIndex)}
          >
            <Image
              src={galleryImages[currentIndex]}
              alt={getImageAlt(currentIndex)}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Sol Ok */}
          <button
            onClick={() => goToImage("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2.5 rounded-full transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Sağ Ok */}
          <button
            onClick={() => goToImage("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2.5 rounded-full transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sayaç */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Alt Thumbnail Bar - Mobil */}
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-2">
          {galleryImages.slice(0, 8).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all ${currentIndex === index
                  ? "ring-2 ring-primary scale-105"
                  : "opacity-60 hover:opacity-100"
                }`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
          {galleryImages.length > 8 && (
            <div className="flex-shrink-0 w-16 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
              +{galleryImages.length - 8}
            </div>
          )}
        </div>
      </div>

      {/* ===== DESKTOP: Grid Galeri ===== */}
      <div className="hidden md:block relative">
        {/* Sol Ok */}
        <button
          onClick={() => goToPage("prev")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hover:shadow-2xl p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Sağ Ok */}
        <button
          onClick={() => goToPage("next")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl hover:shadow-2xl p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white text-primary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Grid */}
        <div
          className={`grid grid-cols-4 gap-4 transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"
            }`}
        >
          {getCurrentPageImages().map((image, index) => {
            const actualIndex = currentPage * ITEMS_PER_PAGE_DESKTOP + index;
            return (
              <div
                key={`${currentPage}-${index}`}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(actualIndex)}
              >
                <Image
                  src={image}
                  alt={getImageAlt(actualIndex)}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sayfa Göstergesi - Desktop */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentPage) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setTimeout(() => setIsAnimating(false), 50);
                    }, 200);
                  }
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentPage
                    ? "bg-primary w-8"
                    : "bg-slate-300 hover:bg-slate-400 w-2.5"
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500 ml-2">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Üst Bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/70 to-transparent z-10">
            <span className="bg-white/10 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full">
              {selectedImage + 1} / {galleryImages.length}
            </span>
            <button
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Ana Görsel */}
          <div
            className="relative w-full h-[70vh] px-4 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]}
              alt={getImageAlt(selectedImage)}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigasyon Okları */}
          {selectedImage > 0 && (
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {selectedImage < galleryImages.length - 1 && (
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Alt Thumbnail'lar */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent pt-12 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center gap-2 px-4 overflow-x-auto scrollbar-hide pb-2">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-12 h-9 md:w-16 md:h-12 rounded-lg overflow-hidden transition-all duration-300 ${selectedImage === index
                      ? "ring-2 ring-accent scale-110 opacity-100"
                      : "opacity-40 hover:opacity-70"
                    }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
