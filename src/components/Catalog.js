import React from 'react';
import { useNavigate } from 'react-router-dom';
import Catalog from '../global_catalog_data_with_names.json';
import BddayImg from '../assets/Image/BdayImg.jpg';
import Wedding from '../assets/Image/wedding.avif';
import Annivarsary from '../assets/Image/anniversary.jpg';
import NewbornBaby from '../assets/Image/newborn baby welcome.webp';
import Haldi from '../assets/Image/haldi.jpg';
import RingCeremony from '../assets/Image/ring ceremony.jpg';
import Flowers from '../assets/Image/flowers.jpg';
import SpecialEffects from '../assets/Image/effects.jpg';
import GrandEntries from '../assets/Image/entries.jpg';
import CustomizeBallon from '../assets/Image/balloon.avif';
import KidsCeremony from '../assets/Image/namkaran.webp';
import Creative from '../assets/Image/creative.jpg';

const Catalogs = () => {
  const navigate = useNavigate();

  const catalogItems = [
    { id: 1, name: 'Birthday Decoration', image: BddayImg, category: 'BirthdayDecorations' },
    { id: 2, name: 'Wedding Setup', image: Wedding, category: 'WeddingDecorations' },
    { id: 3, name: 'Anniversary Theme', image: Annivarsary, category: 'AnniversaryDecorations' },
    { id: 4, name: 'Newborn Baby Welcome', image: NewbornBaby, category: 'NewbornWelcome' },
    { id: 5, name: 'Haldi Ceremony', image: Haldi, category: 'HaldiMehndiSangeet' },
    { id: 6, name: 'Ring Ceremony', image: RingCeremony, category: 'RingCeremonyEngagement' },
    { id: 7, name: 'Floral Decor', image: Flowers, category: 'FlowerDecorations' },
    { id: 8, name: 'Special Effects', image: SpecialEffects, category: 'SpecialEffects' },
    { id: 9, name: 'Grand Entries', image: GrandEntries, category: 'GrandEntries' },
    { id: 10, name: 'Custom Balloon Decor', image: CustomizeBallon, category: 'CustomizedBalloonDecor' },
    { id: 11, name: 'Kids Theme', image: KidsCeremony, category: 'KidsCeremonies' },
    { id: 12, name: 'Creative Styling', image: Creative, category: 'CreativeCustomThemes' },
  ];

  function CatalogDesign(category) {
    const catalogFilter = Catalog.filter(cat => cat.category === category);
    navigate('/catalogItems', { state: { category, items: catalogFilter } });
  }

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#8b5e3c] mb-12">
          Our Event Catalog
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              onClick={() => CatalogDesign(item.category)}
              className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="py-2 px-2 text-center">
                <h3 className="text-sm font-semibold text-gray-700">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
