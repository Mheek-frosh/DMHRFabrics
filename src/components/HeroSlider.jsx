import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Elegance Woven Into Every Thread.",
    subtitle: "Discover our premium selection of Ankara, Lace, and luxury fabrics. Perfect for your next bespoke outfit, embodying timeless style and modern grace.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2012&auto=format&fit=crop",
    badge: "New Arrival Collection"
  },
  {
    title: "Vibrant Patterns for Every Season.",
    subtitle: "Step into the spotlight with our exclusively sourced plain and pattern materials. Tailored for comfort, designed for the bold.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop",
    badge: "Trending Styles"
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

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col md:flex-row pt-20 bg-white dark:bg-lust-dark transition-colors duration-300">
      {/* Left Content Area (Red Theme from reference) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-lust-red text-white relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="max-w-xl relative z-10 animate-fade-in-up" key={currentSlide}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 uppercase tracking-wider shadow-sm border border-white/30">
            {slides[currentSlide].badge}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-md">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg text-white/90 mb-10 max-w-lg leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-lust-red hover:bg-gray-100 py-3 px-8 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop The Collection
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 py-3 px-8 rounded-full font-medium transition-all">
              Explore Vision
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-8 flex gap-3">
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

      {/* Right Image Area */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
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
            {/* Dark mode overlay over image optionally, or just leave vivid */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
