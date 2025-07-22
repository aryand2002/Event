import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aman Soni’s team turned my baby shower into a dreamy celebration. Every detail was picture-perfect!",
      author: 'Priya S.',
      role: 'Event Client',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/portrait-beautiful-smiling-indian-woman_23-2149185444.jpg',
    },
    {
      text: "Our wedding was transformed into a luxurious experience. Aman’s creativity and precision were unmatched.",
      author: 'Rohan K.',
      role: 'Groom',
      rating: 4,
      image: 'https://img.freepik.com/free-photo/handsome-young-indian-man-smiling-confidently_23-2149185135.jpg',
    },
    {
      text: "A flawless corporate event — professional, timely, and visually stunning. Highly recommend Aman’s team.",
      author: 'Anita M.',
      role: 'Corporate Client',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/cheerful-indian-woman-traditional-dress-smiling_23-2149185362.jpg',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200"
            >
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                “{t.text}”
              </p>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#e1c085]"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
