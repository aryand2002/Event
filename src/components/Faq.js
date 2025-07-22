// src/components/Faq.js
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const faqs = [
    {
      question: 'What types of events do you plan?',
      answer:
        'We handle birthdays, weddings, anniversaries, baby showers, corporate events, and social gatherings with customized themes.',
    },
    {
      question: 'Do you provide catering services?',
      answer: 'Yes, we offer gourmet catering tailored to your event’s needs.',
    },
    {
      question: 'How do I book your services?',
      answer: 'Contact Aman Soni via WhatsApp, call, or Instagram to book instantly!',
    },
    {
      question: 'Can you work within my budget?',
      answer: 'Absolutely! We offer luxury event solutions for every budget.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#fffdf4] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-800 mb-12">
          Frequently Asked <span className="text-yellow-600">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
