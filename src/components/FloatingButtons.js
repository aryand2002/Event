import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918319594037"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Call Button */}
      <a
        href="tel:8319594037"
        className="w-14 h-14 rounded-full bg-blue-500 shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Call Now"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
