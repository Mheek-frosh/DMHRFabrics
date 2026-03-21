import React, { useState } from 'react';
import { ShoppingBag, Star, Filter, ChevronDown } from 'lucide-react';

const allProducts = [
  { id: 1, name: 'Royal Blue Ankara Heritage', price: '₦12,500', oldPrice: '₦15,000', image: 'https://images.unsplash.com/photo-1558981404-b91c0e3a63ec?w=500', badge: 'Sale', category: 'Ankara' },
  { id: 2, name: 'Swiss Voile Lace - Gold', price: '₦45,000', oldPrice: null, image: 'https://images.unsplash.com/photo-1588611910246-0155b118b760?w=500', badge: 'New', category: 'Lace' },
  { id: 3, name: 'Silk Duchesse Satin', price: '₦8,000 / yard', oldPrice: null, image: 'https://images.unsplash.com/photo-1601618334812-1fa000aeb649?w=500', badge: '', category: 'Plain' },
  { id: 4, name: 'Premium Senator Cashmere', price: '₦22,000', oldPrice: null, image: 'https://images.unsplash.com/photo-1582214959146-24e5d8ea37a2?w=500', badge: 'Hot', category: 'Senator' },
  { id: 5, name: 'Vintage Velvet Wine', price: '₦18,500', oldPrice: '₦20,000', image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=500', badge: '', category: 'Plain' },
  { id: 6, name: 'Golden Chiffon Drapery', price: '₦9,000 / yard', oldPrice: null, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500', badge: 'Sale', category: 'Plain' },
  { id: 7, name: 'French Organza Mesh', price: '₦30,000', oldPrice: null, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500', badge: 'New', category: 'Lace' },
  { id: 8, name: 'Emerald Guinea Brocade', price: '₦25,000', oldPrice: '₦28,000', image: 'https://images.unsplash.com/photo-1605380590457-41851e39e64e?w=500', badge: '', category: 'Senator' },
  { id: 9, name: 'Classic Kente Print', price: '₦14,000', oldPrice: '₦16,000', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500', badge: 'Hot', category: 'Ankara' },
  { id: 10, name: 'Royal Purple Damask', price: '₦19,500', oldPrice: null, image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500', badge: '', category: 'Plain' },
  { id: 11, name: 'White Guipure Lace', price: '₦38,000', oldPrice: '₦42,000', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500', badge: 'Sale', category: 'Lace' },
  { id: 12, name: 'Midnight Blue Cashmere', price: '₦24,000', oldPrice: null, image: 'https://images.unsplash.com/photo-1584850388276-8f3bb748a6a1?w=500', badge: '', category: 'Senator' },
];

const categories = ['All', 'Ankara', 'Lace', 'Plain', 'Senator'];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#111827] min-h-screen pt-32 pb-24 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="w-full bg-lust-dark text-white py-16 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Fabric Collection</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Browse our meticulously curated selection of premium Ankara, Lace, and plain materials designed to elevate your style.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Fillters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 sticky top-32">
            <div className="flex items-center gap-2 mb-6 text-lust-dark dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
              <Filter className="w-5 h-5" />
              <h3 className="font-bold text-lg">Filters</h3>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Categories</h4>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left w-full transition-colors ${activeCategory === cat ? 'text-lust-red font-bold' : 'text-gray-600 dark:text-gray-400 hover:text-lust-red'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded text-lust-red focus:ring-lust-red" /> Under ₦10,000
                </label>
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded text-lust-red focus:ring-lust-red" /> ₦10,000 - ₦25,000
                </label>
                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded text-lust-red focus:ring-lust-red" /> Over ₦25,000
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">Showing {filteredProducts.length} results</p>
            <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md hover:border-lust-red transition-colors">
              Sort by: Recommended <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col cursor-pointer">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {product.badge && (
                    <span className={`absolute top-3 left-3 z-10 text-xs font-bold px-2 py-1 rounded text-white ${product.badge === 'Sale' ? 'bg-lust-red' : 'bg-lust-dark'}`}>
                      {product.badge}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Mobile-Friendly Add to Cart */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <button className="bg-white text-lust-dark font-medium py-2 px-4 rounded flex items-center gap-2 w-full justify-center hover:bg-lust-red hover:text-white transition-colors shadow-lg">
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-1 line-clamp-1 group-hover:text-lust-red dark:group-hover:text-lust-red transition-colors">{product.name}</h3>
                  <div className="flex gap-2 items-baseline mt-auto">
                    <span className="text-lg font-bold text-lust-dark dark:text-white">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dummy */}
          <div className="flex justify-center mt-16">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-lust-red transition-colors">&lt;</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-lust-red text-white font-bold shadow-md">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-lust-red transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-lust-red transition-colors">&gt;</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
