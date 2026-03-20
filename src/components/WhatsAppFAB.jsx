import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const whatsappNumber = "2347054885172"; // 07054885172 mapped to +234
  const message = encodeURIComponent("Hello DMHRFabrics, I'm interested in your fabrics!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-lust-dark text-sm font-medium py-2 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
