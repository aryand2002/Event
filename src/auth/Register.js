import React from 'react';
import { Form, Input, Button, Select, Typography, message } from 'antd';

import { registerApi } from '../service/coreapi';

const { Title } = Typography;
const { Option } = Select;

const Register = () => {
  const onFinish = async (values) => {
    const response = await registerApi(values);
    console.log(values,"hello")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <Title level={3} className="text-center mb-6">Register</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email format' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Mobile No."
            name="mobile_no"
            rules={[
              { required: true, message: 'Enter mobile number' },
              {
                pattern: /^\+91\d{10}$/,
                message: 'Mobile must be in +91XXXXXXXXXX format',
              },
            ]}
          >
            <Input placeholder="+91XXXXXXXXXX" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: false }]}
          >
            <Input.TextArea placeholder="Enter your address (optional)" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
