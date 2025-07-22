import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Rate, Select } from 'antd';

const { Option } = Select;

function CatalogItems() {
    const navigate = useNavigate();
  const location = useLocation();
  const initialItems = Array.isArray(location.state?.items) ? location.state.items : [];
  const [items, setItems] = useState(initialItems);
  const [sortOption, setSortOption] = useState(null);

  const handleSortChange = (value) => {
    setSortOption(value);
    let sortedItems = [...initialItems];

    if (value === 'lowToHigh') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (value === 'highToLow') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (value === 'under2000') {
      sortedItems = sortedItems.filter(item => item.price < 2000);
    } else if (value === 'between2000to5000') {
      sortedItems = sortedItems.filter(item => item.price >= 2000 && item.price <= 5000);
    } else if (value === 'above5000') {
      sortedItems = sortedItems.filter(item => item.price > 5000);
    }

    setItems(sortedItems);
  };

  function itemDetails(id){
  const findData = items.find(i=>i.id === id)
  navigate('/itemDetails',{state:findData})
  }

  return (
    <section className="px-4 py-20 bg-[#fdfaf4] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8b5e3c] text-center mb-6">
          {location.state?.category || 'Catalog'}
        </h2>

        <div className="flex justify-end mb-6">
          <Select
            value={sortOption}
            onChange={handleSortChange}
            placeholder="Sort By"
            style={{ width: 220 }}
          >
            <Option value="lowToHigh">Price: Low to High</Option>
            <Option value="highToLow">Price: High to Low</Option>
            <Option value="under2000">Under ₹2000</Option>
            <Option value="between2000to5000">₹2000 - ₹5000</Option>
            <Option value="above5000">Above ₹5000</Option>
          </Select>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">No items found in this category.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={()=>itemDetails(item.id)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-[15px] font-semibold text-[#7a4a24]">{item.name}</h3>
                 
                  <div className="text-[#b88948] font-bold text-lg">₹{item.price}</div>
                  <Rate disabled defaultValue={item.rating || 4} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CatalogItems;
