import React from 'react'
import { Button, InputNumber, Form, Input } from 'antd';
import axios from 'axios';

const Create = () => {
    const onFinish = (values) => {

        axios.post('https://68dcfc917cd1948060abf7d6.mockapi.io/api/product',values).then((res)=>console.log(res)
        )
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const { TextArea } = Input;
  return (
    <div>
     <div>
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'Please input your product name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <InputNumber min={1} max={1000} />
    </Form.Item> 
    <Form.Item
      label="Rating"
      name="rating"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <InputNumber min={1} max={5} />
    </Form.Item> 
    <Form.Item
      label="description"
      name="description"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
    </Form.Item> 
     <Form.Item
      label="Product image"
      name="image"
      rules={[{ required: true, message: 'Please input your product name!' }]}
    >
      <Input />
    </Form.Item>

  

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
     </div>
    </div>
  )
}

export default Create
