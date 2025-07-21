// src/components/FloatingButtons.js
import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/918319594037"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>
      <a
        href="tel:8319594037"
        className="w-14 h-14 rounded-full bg-blue-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <img src="/images/call.png" alt="Call Now" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default FloatingButtons;
