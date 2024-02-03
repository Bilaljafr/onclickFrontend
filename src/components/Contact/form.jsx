import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import income from '../../assets/About/income.png'
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Routes, Route, useNavigate } from 'react-router-dom';
import localHost from '../../localHost';

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


const App = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post(`${localHost}contact `, {
      values,
    }).then(function (response) {
      localStorage.setItem("contactFormData", JSON.stringify(response.data.message))
      Swal.fire(
        'Thank You!',
        'Our Team will contact you soon!',
        'success'
      );
      navigate('/');
    })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Our team working on that',
        })
      });
  };
  return (
  <div>
    <div className='about-form'>
      <img src={income} style={{ width: "5rem", height: "5rem" }} />
      <h3>Let's get connected</h3>
      <p>Just fill out this form and we will be with you!</p>
    </div>
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['fullName']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextField
          label="Full name"
          type={"text"}
          style={{ width: '21rem' }}
          required />
      </Form.Item>
      <Form.Item
        name={['email']}
      >
        <Form.Item
          name={['email']}>
          <TextField
            label="Your email"
            type={"email"}
            style={{ width: '21rem', marginBottom: '-2.5rem' }}
            required />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name={['phone']}
      >
        <PhoneInput
          inputStyle={{ width: '21rem', height: '4rem', color: 'green' }}
          inputProps={{
            name: 'phone',
            required: true,
          }}
          country={Number}
          rules={{ required: true }} />
      </Form.Item>
      <Form.Item name={['message']}
      >
        <Input.TextArea  style={{ height: '6rem', width: '21rem', resize: 'none' }} placeholder="Message" required/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button className='form-btn' type="primary" htmlType="submit">
          Submit Now
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
};
export default App;