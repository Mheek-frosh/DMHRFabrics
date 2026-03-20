import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Royal Blue Ankara Heritage',
    price: '₦12,500',
    oldPrice: '₦15,000',
    image: 'https://images.unsplash.com/photo-1558981404-b91c0e3a63ec?w=500&auto=format&fit=crop&q=60',
    badge: 'Sale'
  },
  {
    id: 2,
    name: 'Swiss Voile Lace - Gold',
    price: '₦45,000',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1588611910246-0155b118b760?w=500&auto=format&fit=crop&q=60',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Silk Duchesse Satin',
    price: '₦8,000 / yard',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1601618334812-1fa000aeb649?w=500&auto=format&fit=crop&q=60',
    badge: ''
  },
  {
    id: 4,
    name: 'Premium Senator Cashmere',
    price: '₦22,000',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1582214959146-24e5d8ea37a2?w=500&auto=format&fit=crop&q=60',
    badge: 'Hot'
  },
  {
    id: 5,
    name: 'Vintage Velvet Wine',
    price: '₦18,500',
    oldPrice: '₦20,000',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=500&auto=format&fit=crop&q=60',
    badge: ''
  },
  {
    id: 6,
    name: 'Golden Chiffon Drapery',
    price: '₦9,000 / yard',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop&q=60',
    badge: 'Sale'
  },
  {
    id: 7,
    name: 'French Organza Mesh',
    price: '₦30,000',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60',
    badge: 'New'
  },
  {
    id: 8,
    name: 'Emerald Guinea Brocade',
    price: '₦25,000',
    oldPrice: '₦28,000',
    image: 'https://images.unsplash.com/photo-1605380590457-41851e39e64e?w=500&auto=format&fit=crop&q=60',
    badge: ''
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-[#fcfcfc] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-lust-dark dark:text-white mb-2">Featured Products</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Our handpicked premium fabrics for you.</p>
          </div>
          <button className="hidden md:block underline text-lust-dark dark:text-gray-300 font-medium hover:text-lust-red transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {products.map((product) => (
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
                
                {/* Hover Add to Cart */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <button className="bg-white text-lust-dark font-medium py-2 px-4 rounded flex items-center gap-2 w-full justify-center hover:bg-lust-red hover:text-white transition-colors">
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
        
        <button className="mt-8 md:hidden w-full border border-lust-dark dark:border-gray-500 text-lust-dark dark:text-white py-3 rounded-full font-medium hover:bg-lust-dark dark:hover:bg-gray-100 hover:text-white dark:hover:text-lust-dark transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
