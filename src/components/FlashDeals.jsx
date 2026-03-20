import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const flashProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558981404-b91c0e3a63ec?w=500&auto=format&fit=crop&q=60',
    discount: '-47%'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588611910246-0155b118b760?w=500&auto=format&fit=crop&q=60',
    discount: '-38%'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1601618334812-1fa000aeb649?w=500&auto=format&fit=crop&q=60',
    discount: '-37%'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1582214959146-24e5d8ea37a2?w=500&auto=format&fit=crop&q=60',
    discount: '-36%'
  }
];

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 53
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset
              hours = 23; 
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <div className="bg-[#cc1616] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header and Timer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-8 h-8 opacity-80" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold drop-shadow-sm tracking-tight">Flash Deals</h2>
            </div>
            <p className="text-white/90 text-lg md:text-xl font-medium ml-1">
              Limited time offers - grab them before they're gone!
            </p>
          </div>
          
          {/* Large Countdown Timer */}
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-4 min-w-[80px] md:min-w-[100px] border border-white/20 shadow-inner">
              <span className="text-4xl md:text-5xl font-bold mb-1">{formatTime(timeLeft.hours)}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80">Hours</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-4 min-w-[80px] md:min-w-[100px] border border-white/20 shadow-inner">
              <span className="text-4xl md:text-5xl font-bold mb-1">{formatTime(timeLeft.minutes)}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80">Minutes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-4 min-w-[80px] md:min-w-[100px] border border-white/20 shadow-inner">
              <span className="text-4xl md:text-5xl font-bold mb-1">{formatTime(timeLeft.seconds)}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80">Seconds</span>
            </div>
          </div>
        </div>
        
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product) => (
            <div key={product.id} className="relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group shadow-xl">
              <img 
                src={product.image} 
                alt="Flash Deal Item" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Discount Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[#cc1616] text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                  {product.discount}
                </span>
                <span className="bg-[#cc1616] text-white text-[10px] font-bold px-2 py-1 rounded shadow-md z-10 text-center tracking-widest uppercase w-max">
                  Sale
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
