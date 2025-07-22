import React from 'react';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const Contact = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // You can integrate EmailJS / backend endpoint here
  };

  return (
    <section id="contact" className="py-24 bg-[#fffaf0] text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">
          Get in <span className="text-yellow-900">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section: Info & Map */}
          <div className="space-y-6">
            <div className="space-y-4 text-base">
              <p className="flex items-start gap-3">
                <EnvironmentOutlined className="text-yellow-600 text-xl mt-1" />
                <span>
                  <strong>Location:</strong> Raipur, Chhattisgarh
                </span>
              </p>
              <p className="flex items-start gap-3">
                <PhoneOutlined className="text-yellow-600 text-xl mt-1" />
                <span>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:8319594037" className="text-blue-700 hover:underline">
                    8319594037
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MailOutlined className="text-yellow-600 text-xl mt-1" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:soniblissfulevents@gmail.com"
                    className="text-blue-700 hover:underline"
                  >
                    soniblissfulevents@gmail.com
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <InstagramOutlined className="text-yellow-600 text-xl mt-1" />
                <span>
                  <strong>Instagram:</strong>{' '}
                  <a
                    href="https://www.instagram.com/soni_blissful_events"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    @soni_blissful_events
                  </a>
                </span>
              </p>
            </div>

            {/* Google Maps */}
            <div className="mt-6">
              <iframe
                src="https://maps.google.com/maps?q=Raipur%2C%20Chhattisgarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                className="rounded-xl border-2 border-yellow-200 shadow-sm"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              requiredMark={false}
              autoComplete="off"
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input size="large" placeholder="8319594037" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input size="large" type="email" placeholder="your@email.com" />
              </Form.Item>

              <Form.Item
                label="Event Type"
                name="event_type"
                rules={[{ required: true, message: 'Please mention the event type' }]}
              >
                <Input size="large" placeholder="Wedding, Birthday, etc." />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please type your message' }]}
              >
                <TextArea rows={4} placeholder="Tell us more about your requirements..." />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-yellow-600 hover:bg-yellow-700 border-none w-full"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
