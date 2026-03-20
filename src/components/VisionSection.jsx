import React from 'react';

export default function VisionSection() {
  return (
    <section className="py-24 bg-white dark:bg-lust-dark transition-colors duration-300" id="vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-lust-dark dark:text-white mb-6">Our Vision</h2>
          <div className="w-16 h-1 bg-lust-red mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-serif italic max-w-3xl mx-auto leading-relaxed">
            "To be the premier destination for authentic, high-quality fabrics, empowering individuals to express their unique cultural identity and style with elegance."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-gray-800 flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-lust-dark dark:text-white mb-3">Premium Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">We source only the finest threads and materials out there to ensure longevity and authentic feel.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-gray-800 flex items-center justify-center mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold text-lust-dark dark:text-white mb-3">Cultural Heritage</h3>
            <p className="text-gray-600 dark:text-gray-400">Every pattern tells a story. Our Ankara and laces are selected for their deep cultural roots.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-gray-800 flex items-center justify-center mb-6">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-xl font-bold text-lust-dark dark:text-white mb-3">Accessible Luxury</h3>
            <p className="text-gray-600 dark:text-gray-400">Experience premium-tier fabrics without the exorbitant markup. Luxury that you can afford.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
