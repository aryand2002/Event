import React from 'react';
import { FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    'Premium, Customized Decorations',
    'Experienced Team with Creative Vision',
    'On-Time Delivery & Flawless Execution',
    'Affordable Luxury for Every Budget',
    'Trusted by Hundreds of Happy Clients',
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white fade-in">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose <span className="text-pink-600">Soni Blissful Events?</span>
        </h2>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {reasons.map((reason, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <FaStar className="text-yellow-400 mt-1" />
              <span className="text-gray-700 font-medium">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
