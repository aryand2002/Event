import React, { useState } from 'react';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';

Modal.setAppElement('#root');

const Catalogs = () => {
  const [filter, setFilter] = useState('all');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  const catalogItems = [
    {
      id: 1,
      category: 'Birthday',
      title: 'Vibrant Birthday Bash',
      image: 'https://img.freepik.com/free-photo/balloons-colorful-background_23-2148884383.jpg',
      description: 'Colorful balloon arches with fairy lights for a lively birthday celebration.',
      priceRange: '₹2000 - ₹5000',
      additionalImages: ['https://img.freepik.com/free-photo/balloons-colorful-background_23-2148884383.jpg'],
    },
    {
      id: 2,
      category: 'Wedding',
      title: 'Luxury Wedding Decor',
      image: 'https://img.freepik.com/free-photo/luxury-decor-wedding_23-2148881887.jpg',
      description: 'Elegant balloon setups with gold accents for your dream wedding.',
      priceRange: '₹10000 - ₹25000',
      additionalImages: ['https://img.freepik.com/free-photo/luxury-decor-wedding_23-2148881887.jpg'],
    },
    {
      id: 3,
      category: 'Baby Shower',
      title: 'Charming Baby Shower',
      image: 'https://img.freepik.com/free-photo/baby-shower-party_23-2148983269.jpg',
      description: 'Cute pastel balloon decor for a memorable baby shower.',
      priceRange: '₹3000 - ₹7000',
      additionalImages: ['https://img.freepik.com/free-photo/baby-shower-party_23-2148983269.jpg'],
    },
    {
      id: 4,
      category: 'Anniversary',
      title: 'Romantic Anniversary',
      image: 'https://img.freepik.com/free-photo/romantic-couple-anniversary_23-2149447190.jpg',
      description: 'Romantic balloon arches with heart-shaped elements.',
      priceRange: '₹2500 - ₹6000',
      additionalImages: ['https://img.freepik.com/free-photo/romantic-couple-anniversary_23-2149447190.jpg'],
    },
    {
      id: 5,
      category: 'Corporate',
      title: 'Corporate Event Setup',
      image: 'https://img.freepik.com/free-photo/modern-conference-room_23-2148763872.jpg',
      description: 'Professional balloon decor for corporate events.',
      priceRange: '₹5000 - ₹15000',
      additionalImages: ['https://img.freepik.com/free-photo/modern-conference-room_23-2148763872.jpg'],
    },
  ];

  const filteredItems = filter === 'all' ? catalogItems : catalogItems.filter(item => item.category === filter);

  const openModal = (catalog) => {
    setSelectedCatalog(catalog);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCatalog(null);
  };

  return (
    <section id="catalogs" className="px-4 py-16 max-w-7xl mx-auto bg-white">
      <Helmet>
        <title>Catalogs | Soni Blissful Events</title>
        <meta name="description" content="Premium balloon decoration catalogs for events by Soni Blissful Events." />
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-[#8b5e3c] mb-4">🎈 Our Premium Catalogs</h1>
      <p className="text-center text-gray-600 mb-8">Choose your perfect decor. Book luxury at affordable prices!</p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {['all', 'Birthday', 'Wedding', 'Baby Shower', 'Anniversary', 'Corporate'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full border font-medium transition-all ${
              filter === category
                ? 'bg-[#d4af37] text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-yellow-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">{item.title}</h3>
              <span className="text-gray-500">{item.priceRange}</span>
              <div className="mt-3">
                <a href="https://wa.me/918319594037" className="inline-block bg-[#d4af37] hover:bg-[#c29e28] text-white text-sm font-semibold py-1 px-4 rounded-full">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-2xl w-full mx-4 md:mx-auto bg-white rounded-2xl shadow-2xl p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        {selectedCatalog && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#8b5e3c] mb-4">{selectedCatalog.title}</h2>
            <img
              src={selectedCatalog.image}
              alt={selectedCatalog.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-2">{selectedCatalog.description}</p>
            <p className="font-semibold text-[#d4af37] mb-4">💰 {selectedCatalog.priceRange}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {selectedCatalog.additionalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Catalog ${idx}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://wa.me/918319594037"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full shadow"
              >
                Book This Package
              </a>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-5 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Catalogs;
