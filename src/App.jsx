import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FlashDeals from './components/FlashDeals';
import CategoryCards from './components/CategoryCards';
import ProductShowcase from './components/ProductShowcase';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="font-sans antialiased text-lust-dark bg-white overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSlider />
        <FlashDeals />
        <CategoryCards />
        <ProductShowcase />
        <VisionSection />
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
