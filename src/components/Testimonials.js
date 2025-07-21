import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aman Soni’s team turned my baby shower into a dreamy celebration! The balloon decor was stunning!",
      author: 'Priya S.',
    },
    {
      text: "Our wedding was magical, thanks to Aman’s luxurious setups and attention to detail.",
      author: 'Rohan K.',
    },
    {
      text: "Best event planners in Raipur! Aman’s corporate event setup was flawless.",
      author: 'Anita M.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 fade-in">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Client Reviews</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-left"
            >
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">— {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
