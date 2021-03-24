import { Form, Input, Radio, InputNumber } from 'antd';
import { useState, useEffect } from 'react';

const formPreviewLayout = {
  labelCol: {
      xs: { span: 18 },
      sm: { span: 6 },
  },
  wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
  },
};

const UserForm = ({ form }) => {

  return (
    <Form form={form} {...formPreviewLayout}>
      <Form.Item name="id" label="Id" style={{ display: 'none' }}>
        <Input/>
    </Form.Item>
      <Form.Item name="name" label="Name" rules={[{required: true, message: 'Please input your name'}]}>
          <Input/>
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please choose your gender'}]}>
          <Radio.Group >
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          </Radio.Group>
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{type: 'email', message: 'Please input your email'}]}>
          <Input/>
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{type: 'number', min: 20, max: 50, message: 'Please input your age'}]}>
          <InputNumber/>
      </Form.Item>
    </Form>
  );

};

export default UserForm;
