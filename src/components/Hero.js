import React from 'react';
import Img1 from '../assets/Image/Herobg.jpg';

const Hero = () => {
  return (
    <section className="relative pt-16 text-center px-3">

      {/* Background Image with Overlay Content */}
      <div className="relative w-full h-[220px] md:h-[500px] overflow-hidden rounded-[15px]">
        <img
          src={Img1}
          alt="Hero"
          className="w-full h-full object-cover rounded-[15px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-white">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{
              color: '#ffffff',
              textShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
            }}
          >
            Soni Blissful Events By Aman Soni
          </h1>

          <p className="text-xs md:text-xl max-w-2xl mb-4 drop-shadow-md leading-relaxed">
            Premium Wedding & Event Planners in Raipur – Customized Themes, Creative Decorations, and Blissful Moments.
          </p>

          <a
            href="https://wa.me/918319594037"
            className="bg-[#d4af37] hover:bg-[#c19c2b] text-white px-6 py-3 rounded-full font-semibold shadow transition text-sm md:text-base"
            style={{
              textShadow: '0 0 6px rgba(255, 255, 255, 0.85)',
            }}
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 mb-6 px-4">
        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="tel:8319594037"
            className="min-w-[140px] text-center bg-[#d4af37] hover:bg-[#c19c2b] text-white text-sm px-5 py-2 rounded-full font-medium shadow transition"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918319594037"
            className="min-w-[140px] text-center bg-[#d4af37] hover:bg-[#c19c2b] text-white text-sm px-5 py-2 rounded-full font-medium shadow transition"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://www.instagram.com/soni_blissful_events"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[140px] text-center bg-[#d4af37] hover:bg-[#c19c2b] text-white text-sm px-5 py-2 rounded-full font-medium shadow transition"
          >
            📸 Instagram
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
