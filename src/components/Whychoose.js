import React from 'react';
import { FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    'Premium, Customized Decorations',
    'Experienced Team with Creative Vision',
    'On-Time Delivery & Flawless Execution',
    'Affordable Luxury for Every Budget',
    'Trusted by Hundreds of Happy Clients',
    'Budget-Friendly Packages for All',
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#fffdf4]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-14 tracking-tight">
          Why Choose <span className="text-yellow-600">Soni Blissful Events?</span>
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {reasons.map((reason, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg border border-yellow-200 transition duration-300 group"
            >
              <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full group-hover:scale-110 transform transition duration-300 shadow-inner">
                <FaStar className="w-5 h-5" />
              </div>
              <span className="text-gray-800 text-lg font-medium leading-snug group-hover:text-yellow-700 transition">
                {reason}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
