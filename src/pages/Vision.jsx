import React from 'react';
import VisionSection from '../components/VisionSection';

export default function Vision() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-32 pb-24 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-lust-red font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-lust-dark dark:text-white mb-6">Our Heritage & Story</h1>
        <div className="w-24 h-1 bg-lust-red mx-auto"></div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[60vh]">
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80" 
              alt="Cultural Fabric Creation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-lust-dark dark:text-white mb-6">Born from a passion for authentic culture.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              For decades, African fashion has been the cornerstone of elegance, deeply rooted in history and vibrant storytelling. Every pattern, every weave, and every hue carries a meaning passed down through generations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              At DMHRFabrics, our journey began with a simple mission: to bridge the gap between traditional prestige and modern accessibility. We travel far and wide to source only the most meticulously crafted Ankara, Guinea Brocades, and genuine Swiss Voile Laces, ensuring that our community receives nothing short of royalty.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-l-4 border-lust-red">
              <p className="text-xl font-serif italic text-gray-800 dark:text-gray-200">
                "Fabric isn't just material we wear. It is the canvas upon which our heritage is proudly painted."
              </p>
              <p className="mt-4 font-bold text-lust-red uppercase text-sm tracking-wider">— DMHRFabrics Founders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reusing the VisionSection Component */}
      <div className="bg-gray-50 dark:bg-[#111827] py-8 rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
        <VisionSection />
      </div>

    </div>
  );
}
