import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Vision from './pages/Vision';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-lust-dark bg-white overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
