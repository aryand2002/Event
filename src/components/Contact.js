// src/components/Contact.js
import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 fade-in">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-12 text-left">
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-pink-600 text-xl mt-1" />
              <span>
                <strong>Location:</strong> Raipur, Chhattisgarh
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaPhone className="text-pink-600 text-xl mt-1" />
              <span>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:8319594037"
                  className="text-blue-600 hover:underline"
                >
                  8319594037
                </a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaEnvelope className="text-pink-600 text-xl mt-1" />
              <span>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:soniblissfulevents@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  soniblissfulevents@gmail.com
                </a>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaInstagram className="text-pink-600 text-xl mt-1" />
              <span>
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://www.instagram.com/soni_blissful_events?igsh=MWl6ejA5aDM0NzBhNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @soni_blissful_events
                </a>
              </span>
            </p>
          </div>

          <form
            action="mailto:soniblissfulevents@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="event_type"
              placeholder="Event Type"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
