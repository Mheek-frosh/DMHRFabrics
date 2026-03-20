import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-lust-dark text-white pt-20 pb-10" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1 border-r border-gray-800 pr-4">
            <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white mb-6 inline-block">
              DMHRFabrics
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elegance woven into every thread. Your premier plug for premium Ankara, Lace, and plain materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-lust-red transition-colors text-sm">Home</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-lust-red transition-colors text-sm">Shop Fabrics</a></li>
              <li><a href="#vision" className="text-gray-400 hover:text-lust-red transition-colors text-sm">Our Vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-lust-red transition-colors text-sm">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Join Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-lust-red text-sm"
              />
              <button 
                type="submit" 
                className="bg-lust-red hover:bg-red-700 transition-colors px-6 py-3 rounded-r-md font-medium text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DMHRFabrics. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
