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
      image: '/images/wp-1752822232768554718135726826558.jpg',
      description: 'Colorful balloon arches with fairy lights for a lively birthday celebration.',
      priceRange: '₹2000 - ₹5000',
      additionalImages: ['/images/wp-1752822232768554718135726826558.jpg'],
    },
    {
      id: 2,
      category: 'Wedding',
      title: 'Luxury Wedding Decor',
      image: '/images/wp-17528222844823747824188811704468.jpg',
      description: 'Elegant balloon setups with gold accents for your dream wedding.',
      priceRange: '₹10000 - ₹25000',
      additionalImages: ['/images/wp-17528222844823747824188811704468.jpg'],
    },
    {
      id: 3,
      category: 'Baby Shower',
      title: 'Charming Baby Shower',
      image: '/images/img202507162349363398062193700784137.jpg',
      description: 'Cute pastel balloon decor for a memorable baby shower.',
      priceRange: '₹3000 - ₹7000',
      additionalImages: ['/images/img202507162349363398062193700784137.jpg'],
    },
    {
      id: 4,
      category: 'Anniversary',
      title: 'Romantic Anniversary',
      image: '/images/wp-17528221924852214358623099963295.jpg',
      description: 'Romantic balloon arches with heart-shaped elements.',
      priceRange: '₹2500 - ₹6000',
      additionalImages: ['/images/wp-17528221924852214358623099963295.jpg'],
    },
    {
      id: 5,
      category: 'Corporate',
      title: 'Corporate Event Setup',
      image: '/images/wp-17528224281403122343419318151283.webp',
      description: 'Professional balloon decor for corporate events.',
      priceRange: '₹5000 - ₹15000',
      additionalImages: ['/images/wp-17528224281403122343419318151283.webp'],
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
    <section id="catalogs" className="px-4 py-16 max-w-7xl mx-auto">
      <Helmet>
        <title>Catalogs | Soni Blissful Events by Aman Soni</title>
        <meta name="description" content="Explore premium balloon decoration catalogs for birthdays, weddings, baby showers, and more in Raipur by Soni Blissful Events." />
        <meta name="keywords" content="balloon decoration catalogs, event decor Raipur, Aman Soni, luxury event planning" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Explore Our Stunning Balloon Decoration Catalogs!</h1>
      <p className="text-center text-gray-600 mb-6">Choose from our premium designs for your next event. Book now for a luxurious experience!</p>

      <div className="flex justify-center mb-6">
        <a href="https://wa.me/918319594037" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition-all">📲 Book Now</a>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['all', 'Birthday', 'Wedding', 'Baby Shower', 'Anniversary', 'Corporate'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full border transition-all ${
              filter === category ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-yellow-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition-all"
            onClick={() => openModal(item)}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <p className="font-semibold text-lg">{item.title}</p>
              <a href="https://wa.me/918319594037" className="mt-2 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-full text-sm">Book Now</a>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-lg mx-auto my-20 bg-white rounded-lg shadow-xl p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {selectedCatalog && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{selectedCatalog.title}</h2>
            <img
              src={selectedCatalog.image}
              alt={selectedCatalog.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <p className="mb-2">{selectedCatalog.description}</p>
            <p className="font-semibold mb-4">💰 {selectedCatalog.priceRange}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedCatalog.additionalImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Additional ${idx}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/918319594037"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"
              >
                Book This Package
              </a>
              <button
                onClick={closeModal}
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-full"
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

