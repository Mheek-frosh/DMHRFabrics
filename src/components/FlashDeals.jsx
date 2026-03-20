import React, { useState, useEffect } from 'react';

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
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
              // Reset timer or clear interval
              hours = 24; 
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
    <div className="bg-lust-red text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <span className="font-medium tracking-wide text-sm md:text-base">
          🔥 FLASH SALE: UP TO 50% OFF SELECTED FABRICS
        </span>
        
        <div className="flex bg-white/20 rounded-md overflow-hidden">
          <div className="px-3 py-1 bg-white/20 font-bold backdrop-blur-sm">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="px-1 py-1 font-bold">:</div>
          <div className="px-3 py-1 bg-white/20 font-bold backdrop-blur-sm">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="px-1 py-1 font-bold">:</div>
          <div className="px-3 py-1 bg-white/20 font-bold backdrop-blur-sm">
            {formatTime(timeLeft.seconds)}
          </div>
        </div>
        
        <button className="text-white underline text-sm font-medium hover:text-red-100 transition-colors">
          Shop Offers Now
        </button>
      </div>
    </div>
  );
}
