import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#shop' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-lust-dark hover:text-lust-red transition-colors">
          DMHRFabrics
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-lust-red transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-700 hover:text-lust-red transition-colors p-2">
            <Sun className="w-5 h-5" />
          </button>
          <button className="text-gray-700 hover:text-lust-red transition-colors relative p-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-lust-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-lust-dark p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-800 hover:text-lust-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
