import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

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

  // The header now uses a solid background (bg-white/dark:bg-lust-dark) 
  // on load rather than a transparent overlay, to match the reference image's nav style.
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-lust-dark shadow-sm py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-lust-dark dark:text-white hover:text-lust-red transition-colors">
          DMHRFabrics
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lust-red dark:hover:text-lust-red transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-gray-700 dark:text-gray-300 hover:text-lust-red transition-colors p-2"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-gray-700 dark:text-gray-300 hover:text-lust-red transition-colors relative p-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-lust-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile Actions & Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button className="text-gray-700 dark:text-gray-300 hover:text-lust-red transition-colors relative p-2" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-lust-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="text-lust-dark dark:text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-lust-dark border-t border-gray-100 dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800 mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Theme</span>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-gray-700 dark:text-gray-300 p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-lust-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
