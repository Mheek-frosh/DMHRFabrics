import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FlashDeals from '../components/FlashDeals';
import CategoryCards from '../components/CategoryCards';
import ProductShowcase from '../components/ProductShowcase';
import VisionSection from '../components/VisionSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full min-h-screen">
      <HeroSlider />
      <FlashDeals />
      <CategoryCards />
      <ProductShowcase />
      <VisionSection />
    </div>
  );
}
