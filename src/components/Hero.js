import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Img1 from '../assets/Image/img (1).jpg';
import Img2 from '../assets/Image/img (2).jpg';
import Img3 from '../assets/Image/img (3).jpg';

const images = [Img1, Img2, Img3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="pt-24 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-yellow-900 text-center px-4">

      {/* Image Slider */}
      <div className="relative w-full max-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-[300px] md:h-[500px] object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-200/80 hover:bg-yellow-300 text-yellow-900 p-2 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-200/80 hover:bg-yellow-300 text-yellow-900 p-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>

      {/* Paragraph + Book Button */}
      <div className="mt-10 max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xl md:text-2xl text-yellow-800 font-semibold drop-shadow-md leading-relaxed">
          <span className="text-yellow-700 text-3xl md:text-3xl font-bold drop-shadow-glow">
            Soni Blissful Events By Aman Soni
          </span>
          <br />
          Premium Wedding & Event Planners in Raipur – Customized Themes, Creative Decorations, and Blissful Moments.
        </p>

        <a
          href="#book"
          className="bg-[#d4af37] hover:bg-[#c19c2b] text-white px-6 py-2 rounded-full font-semibold shadow transition text-sm md:text-base w-[180px] text-center"
          style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.7)' }}
        >
          Book Now
        </a>
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
