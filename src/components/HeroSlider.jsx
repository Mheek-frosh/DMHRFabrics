import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "New Arrivals",
    subtitle: "Discover our premium selection of Ankara, Lace, and luxury fabrics. Perfect for your next bespoke outfit.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2012&auto=format&fit=crop",
    badge: "FRESH STYLES JUST IN"
  },
  {
    title: "Trending Styles",
    subtitle: "Step into the spotlight with our exclusively sourced plain and pattern materials. Designed for the bold.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop",
    badge: "SEASON HIGHLIGHTS"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full min-h-[85vh] flex mt-[72px] bg-[#161619] text-white overflow-hidden">
      
      {/* Right Image Area - Absolute positioned with Slant */}
      <div className="absolute top-0 right-0 w-full h-[50vh] md:w-[65%] md:h-full z-0 transition-all duration-300 md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt="Premium Fabric" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay specifically for mobile text readability or just general contrast */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Left Content Area */}
      <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center px-8 md:pl-24 md:pr-12 pt-64 md:pt-16 pb-24 md:pb-0">
        <div className="animate-fade-in-up" key={currentSlide}>
          <span className="block text-[#a8905a] font-bold text-sm md:text-base tracking-[0.15em] mb-4 uppercase">
            {slides[currentSlide].badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-6 text-gray-200 tracking-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-md font-light leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
