import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';

const Register = () => {
  const [form] = Form.useForm();
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value) => {
    if (value && value !== form.getFieldValue('password')) {
      return Promise.reject('The two passwords that you entered do not match!');
    } else {
      return Promise.resolve();
    }
  };

  const validateToNextPassword = (rule, value) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    return Promise.resolve();
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Card title="Register">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ prefix: '86' }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: validateToNextPassword,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            {
              validator: compareToFirstPassword,
            },
          ]}
        >
          <Input.Password onBlur={handleConfirmBlur} placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
