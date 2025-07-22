import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const ItemDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="min-h-screen  bg-white py-10 px-4 md:px-6 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl bg-white shadow-md rounded-xl p-6 relative">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4 flex flex-col justify-center">
          <p className="text-green-600 font-semibold">✔ IN STOCK</p>
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p className="text-3xl font-semibold text-[#111]">₹{data.price}.00</p>

          {/* Pincode Check */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Your Pincode"
              className="border px-4 py-2 rounded w-full"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">CHECK</button>
          </div>

          {/* Booking Date */}
          <div>
            <label className="block text-sm mb-1 font-semibold">Choose Booking date</label>
            <input type="date" className="border px-4 py-2 rounded w-full" />
          </div>

          {/* Price Summary */}
          <div className="space-y-1 text-gray-700">
            <p>Base Cost: <span className="font-semibold">₹0.00</span></p>
            <p>General Cost: <span className="font-semibold">₹{data.price}.00/day</span></p>
            <p>Total: <span className="text-green-600 text-xl font-bold">₹{data.price}.00</span></p>
          </div>

          {/* Book Now */}
          <div className="flex items-center gap-4">
            <input type="number" value={1} className="border w-16 px-3 py-1 rounded" />
            <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 font-semibold">BOOK NOW</button>
          </div>

          {/* Category & Brand */}
          <div className="pt-6 text-sm text-gray-600">
            <p><span className="font-semibold">Categories:</span> Balloon decoration, Birthday Decoration</p>
            <p><span className="font-semibold">Brand:</span> Shark Decoration And Events</p>
          </div>
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
              <MessageSquare className="text-white w-5 h-5" />
            </div>
          </a>
          <a href="tel:91XXXXXXXXXX">
            <div className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
              <Phone className="text-white w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
