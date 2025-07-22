import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import toast from 'react-hot-toast';
import { loginAPi } from '../service/coreapi';

const { Title } = Typography;

const Login = () => {
  const onFinish = async (values) => {
    try {
      const response = await loginAPi(values);

      // Check if the response has both tokens
      if (
        response &&
        response.data &&
        response.data.tokens &&
        response.data.tokens.access
      ) {
        const { access, refresh } = response.data.tokens;

        // ✅ Save tokens
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        toast.success('Login successful!');
        // Optionally redirect here
        // navigate('/dashboard');

      } else {
        toast.error('Invalid login response format');
      }
    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        const errMsg = error.response.data?.detail || 'Invalid credentials';
        toast.error(errMsg);
      } else if (error.request) {
        toast.error('No response from server');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <Title level={3} className="text-center mb-6">Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
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
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
