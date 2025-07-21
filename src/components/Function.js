import React from 'react';
import {
  FaBirthdayCake,
  FaRing,
  FaGlassCheers,
  FaBaby,
  FaBuilding,
} from 'react-icons/fa';
import { RiFlowerLine } from 'react-icons/ri';

const Functions = () => {
  return (
    <section id="functions" className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#bfa145]">
        Functions We Cover
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Function Item */}
        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <FaBirthdayCake className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Birthdays</h3>
          <p className="text-gray-700 text-sm">Vibrant balloon setups and themes.</p>
        </div>

        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <FaRing className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Weddings</h3>
          <p className="text-gray-700 text-sm">Luxurious decor for your dream wedding.</p>
        </div>

        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <FaGlassCheers className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Anniversaries</h3>
          <p className="text-gray-700 text-sm">Romantic themes for milestones.</p>
        </div>

        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <FaBaby className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Baby Showers</h3>
          <p className="text-gray-700 text-sm">Charming welcome corners.</p>
        </div>

        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <FaBuilding className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Corporate Events</h3>
          <p className="text-gray-700 text-sm">Professional setups for business.</p>
        </div>

        <div className="bg-[#fff8e1] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition">
          <RiFlowerLine className="text-4xl text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#bfa145] mb-2">Social Gatherings</h3>
          <p className="text-gray-700 text-sm">Creative decor for any occasion.</p>
        </div>
      </div>
    </section>
  );
};

export default Functions;
