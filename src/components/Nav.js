import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Image/1724946727517.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '/' }, // Will use <Link>
    { label: 'Functions', href: '#functions' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fffaf0] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Soni Blissful Events" className="h-10 w-auto rounded-full" />
          <span className="text-xl md:text-2xl font-bold text-yellow-600 tracking-wide">
            Soni Blissful Events
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-800 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.label === 'Home' ? (
                <Link
                  to={item.href}
                  className="relative inline-block hover:text-yellow-600 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                  hover:after:w-full after:bg-yellow-600 after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="relative inline-block hover:text-yellow-600 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                  hover:after:w-full after:bg-yellow-600 after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-yellow-600 transition">
              Login
            </button>
          </li>
          <li>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-yellow-600 transition">
              Register
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-yellow-600">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-[#fffaf0] px-6 pb-4 space-y-2 font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.label === 'Home' ? (
                <Link
                  to={item.href}
                  className="block py-2 border-b border-gray-300 hover:text-yellow-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="block py-2 border-b border-gray-300 hover:text-yellow-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li className="pt-2 flex gap-3">
            <button className="w-full bg-yellow-500 text-white py-1 rounded-md shadow-md hover:bg-yellow-600 transition">
              Login
            </button>
            <button className="w-full bg-yellow-500 text-white py-1 rounded-md shadow-md hover:bg-yellow-600 transition">
              Register
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
