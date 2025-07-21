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
    <section id="functions" className="py-16 px-4 bg-white fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Functions We Cover
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Function Item */}
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <FaBirthdayCake className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Birthdays</h3>
          <p className="text-gray-600">Vibrant balloon setups and themes.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <FaRing className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Weddings</h3>
          <p className="text-gray-600">Luxurious decor for your dream wedding.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <FaGlassCheers className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Anniversaries</h3>
          <p className="text-gray-600">Romantic themes for milestones.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <FaBaby className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Baby Showers</h3>
          <p className="text-gray-600">Charming welcome corners.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <FaBuilding className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
          <p className="text-gray-600">Professional setups for business.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <RiFlowerLine className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Social Gatherings</h3>
          <p className="text-gray-600">Creative decor for any occasion.</p>
        </div>
      </div>
    </section>
  );
};

export default Functions;
