import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const services = [
    'Event Planning & Management',
    'Luxury Decoration & Themes',
    'Special Effects & Entries',
    'Sound & Lighting',
    'Photography & Videography',
    'Artists & Performers',
    'Gourmet Catering',
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#fffdf5] to-[#fff7e6]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#bfa145] mb-4 tracking-wide">
          Our Premium Services
        </h2>
        <p className="text-gray-700 mb-12 text-lg">
          Making your events extraordinary from start to finish
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-[#f3e5ab] shadow-lg rounded-2xl px-6 py-5 text-left hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#f9e8c5] p-3 rounded-full shadow-md group-hover:bg-[#f6e2a1] transition">
                  <FaCheckCircle className="text-[#d4af37] text-2xl" />
                </div>
                <span className="text-gray-800 font-semibold text-lg group-hover:text-[#bfa145] transition">
                  {service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
