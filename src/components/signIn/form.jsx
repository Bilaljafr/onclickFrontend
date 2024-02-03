import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import income from '../../assets/About/income.png'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const App = () => (
    <div>
    <div className='about-form' style={{textAlign:'start'}}>
        <img src={income} style={{width:"5rem",height:"5rem"}}/>
        <h3 >Sign In</h3>
        <p>We need to verify your identity</p>
    </div>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['Registered email address']}
      rules={[
        {
          type: 'email',
          required: true,
        },
      ]}
    >
      <Input placeholder="Registered email address" style={{width: '20rem', height:'2.5rem'}}/>
    </Form.Item>
    <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
          style={{width: '20rem', height:'2.5rem'}}
        />
      </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <p style={{textAlign: 'start', margin: '-0.5rem 0rem 1rem -7rem', fontWeight: '600'}}>Don't have an account? <a href="/signup" style={{color: '#00bbf9'}}>Sign up</a></p>
      <Button className='form-btn' type="primary" htmlType="submit" style={{width: '10rem', height:'2.5rem', margin: '-7rem', fontWeight: '600'}}>
        Sign In
      </Button>
      
    </Form.Item>
  </Form>
  </div>
);
export default App;