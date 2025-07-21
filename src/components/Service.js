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
    <section id="services" className="py-20 bg-white fade-in">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
        <p className="text-gray-600 mb-10">Making your events extraordinary from start to finish</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="text-gray-700 font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
