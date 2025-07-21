import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Functions', href: '#functions' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1f1f1f] to-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/cropped-1724946727517.png"
            alt="Soni Blissful Events"
            className="h-12 w-auto"
          />
          <span className="text-xl md:text-3xl font-bold text-yellow-400 tracking-wide">
            Soni Blissful Events
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative inline-block text-white hover:text-yellow-400 transition duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-yellow-400">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-black px-6 pb-4 space-y-2 font-medium text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2 border-b border-gray-700 hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
