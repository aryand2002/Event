import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918319594037"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center hover:ring-4 hover:ring-yellow-400 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 .1C7.2.1.1 7.2.1 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 5 2 7.7 2 8.8 0 15.9-7.1 15.9-15.9S24.8.1 16 .1zm0 29.2c-2.4 0-4.8-.6-6.9-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.2-2.1-1.9-4.4-1.9-6.9 0-7.5 6.1-13.6 13.6-13.6S29.6 8.5 29.6 16 23.5 29.3 16 29.3zm7.5-9.8c-.4-.2-2.6-1.3-3-1.5-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.5 1.8s-.6.3-1 0c-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.9-2.3-2.1-2.7s0-.6.2-.8c.2-.2.4-.6.6-.9.2-.3.3-.5.5-.9.2-.4.1-.7 0-1 0-.2-1-2.4-1.4-3.3-.3-.8-.7-.7-1-.7h-.8c-.2 0-.8.1-1.2.6s-1.6 1.6-1.6 3.9 1.6 4.5 1.8 4.8c.2.3 3.1 4.8 7.5 6.5 1.1.5 2 .8 2.7 1 .8.3 1.5.3 2 .2.6-.1 2-.8 2.3-1.5.3-.6.3-1.2.2-1.3-.1-.1-.3-.1-.6-.2z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:8319594037"
        className="w-14 h-14 rounded-full bg-[#007AFF] shadow-xl flex items-center justify-center hover:ring-4 hover:ring-yellow-400 transition-all duration-300"
        aria-label="Call Now"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.06-.24c1.12.37 2.33.57 3.53.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.42 21 3 13.58 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.2.2 2.41.57 3.53.11.38.03.8-.25 1.09l-2.2 2.17z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
