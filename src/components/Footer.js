import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <p className="text-sm md:text-base">
          © 2025 <span className="font-semibold text-[#fcd34d]">Soni Blissful Events</span>. All rights reserved.
        </p>
        <p className="text-sm md:text-base">
          Developed by <span className="font-semibold text-[#fcd34d]">Mr. Aryan Dewangan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
