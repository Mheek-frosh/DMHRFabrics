import React from 'react';

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-[#f8f9fa] overflow-hidden pt-20">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/40 z-10 md:bg-gradient-to-r md:from-white/90 md:to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2012&auto=format&fit=crop" 
          alt="Premium Fabrics" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-start justify-center h-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-lust-red text-sm font-semibold mb-6 uppercase tracking-wider">
            New Arrival Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-lust-dark leading-tight mb-6">
            Elegance Woven<br/>Into Every Thread.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Discover our premium selection of Ankara, Lace, and luxury fabrics. Perfect for your next bespoke outfit, embodying timeless style and modern grace.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary flex items-center gap-2">
              Shop The Collection
            </button>
            <button className="bg-transparent border border-lust-dark text-lust-dark py-2 px-6 rounded-full font-medium hover:bg-lust-dark hover:text-white transition-colors">
              Explore Vision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
