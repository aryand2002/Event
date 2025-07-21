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
  const functions = [
    {
      title: 'Birthdays',
      desc: 'Vibrant balloon setups and themes.',
      icon: <FaBirthdayCake size={30} className="text-pink-500" />,
    },
    {
      title: 'Weddings',
      desc: 'Luxurious decor for your dream wedding.',
      icon: <FaRing size={30} className="text-yellow-500" />,
    },
    {
      title: 'Anniversaries',
      desc: 'Romantic themes for milestones.',
      icon: <FaGlassCheers size={30} className="text-red-500" />,
    },
    {
      title: 'Baby Showers',
      desc: 'Charming welcome corners.',
      icon: <FaBaby size={30} className="text-blue-400" />,
    },
    {
      title: 'Corporate Events',
      desc: 'Professional setups for business.',
      icon: <FaBuilding size={30} className="text-gray-700" />,
    },
    {
      title: 'Social Gatherings',
      desc: 'Creative decor for any occasion.',
      icon: <RiFlowerLine size={30} className="text-green-500" />,
    },
  ];

  return (
    <section id="functions" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Functions We Cover</h2>
        <p className="text-gray-600 mb-12">Making every event memorable and magical!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {functions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Functions;
