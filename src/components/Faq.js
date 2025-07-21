// src/components/Faq.js
import React from 'react';

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

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
