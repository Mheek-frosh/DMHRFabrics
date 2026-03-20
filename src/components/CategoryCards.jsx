import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Ankara Prints',
    count: '124 Items',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Luxury Lace',
    count: '86 Items',
    image: 'https://images.unsplash.com/photo-1584850388276-8f3bb748a6a1?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    title: 'Plain & Pattern',
    count: '210 Items',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    title: 'Senator Materials',
    count: '42 Items',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60'
  }
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-white" id="shop">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-lust-dark mb-4">Shop by Category</h2>
          <div className="w-16 h-1 bg-lust-red"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-serif font-bold text-white mb-1 shadow-sm">{category.title}</h3>
                <p className="text-white/90 text-sm font-medium">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
