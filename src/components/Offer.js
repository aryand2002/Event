import React from 'react';
import Img from '../assets/Image/people-festival.jpg';

const Offer = () => {
  return (
    <section
      id="offer"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 text-white"
      style={{
        backgroundImage: `url(${Img})`,
      }}
      data-aos="zoom-in"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-4 drop-shadow-md">
          🎉 Exclusive Offer!
        </h2>
        <p className="text-lg sm:text-xl text-white mb-6 drop-shadow-sm">
          Book now and get a special discount on Balloon Decoration and Special Effects!
        </p>
        <a
          href="https://wa.me/918319594037"
          className="inline-block bg-[#d4af37] hover:bg-[#c19c2b] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          <span style={{ textShadow: '1px 1px 2px white' }}>
            Book Now
          </span>
        </a>

        <p className="mt-4 text-sm text-gray-300 italic">
          *Offer valid for a limited time only
        </p>
      </div>
    </section>
  );
};

export default Offer;
