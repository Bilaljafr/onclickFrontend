import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select, InputNumber, DatePicker, } from 'antd';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ComboBox from '../AutoComp';
import Swal from 'sweetalert2'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import convertToWordsPKR from '../../../amountConverter';
import localHost from '../../../../localHost';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios.post(`${localHost}parentsInsurance`, {
      values
    }).then(function (response) {
      localStorage.setItem("FormData", JSON.stringify(response.data.message))
      Swal.fire(
        'Thank You!',
        'Our Team will contact you soon!',
        'success'
      );
      navigate('/insurance/plansParents');
    })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Our team working on that',
        })
      });
  };
  const onReset = () => {
    form.resetFields();
  };
  const fields = function () {
    let len = +(child)
    for (let i = 0; i < len; i++) {
      <Form.Item>
        <TextField
          id="outlined-number"
          label="Select your ${i}"
          type="number"
          style={{ width: '21rem' }}
          InputProps={{ inputProps: { min: 18, max: 75 } }}
          onBlur={(e) => setUserAge(e.target.value)}
          required
        />
      </Form.Item>
    }
  }
  const [amount, setAmount] = useState()
  return (
    <div>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px' }}>Parents Insurance</h1>
        <p style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'start', margin: '0.2rem 0 1rem 0', letterSpacing: '0px' }}>Get a plan in just simple steps!</p>
      </div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'start',
          marginRight: 10
        }}
      >
        <Form.Item
        name={['fullName']}>
          <TextField
            label="Your name"
            type={"text"}
            style={{ width: '21rem' }}
            required />
        </Form.Item>
        <Form.Item
        name={['email']}>
          <TextField
            label="Your email"
            type={"email"}
            style={{ width: '21rem' }}
            required />
        </Form.Item>
        <Form.Item
        name={['phone']}>
        <PhoneInput
        inputStyle={{width: '21rem', height: '3rem',color:'green'}}
        inputProps={{
          name: 'phone',
          required: true,
        }}
          country={Number}
          rules={{ required: true }}/>
        </Form.Item>
        <Form.Item
  name={['parentsAge']}
        >
          <TextField
            id="outlined-number"
            label="Select your parents age"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 45, max: 59 } }}
            required
          />
        </Form.Item>
        <Form.Item
        name={['insurancePrize']}>
          <TextField
            id="outlined-number"
            label="Select Hospitalization Limit (PKR)"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 60000, max: 1000000 } }}
            onChange={(e) => setAmount(+(e.target.value))}
            required
          />
        </Form.Item>
        <p style={{margin: '-1.2rem 5px 0 5px', fontSize: '0.8rem', width: '21rem'}}>{amount ? 
      (convertToWordsPKR(amount)) : null}</p>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
            style={{ margin: '0rem 0rem' }}
            className='form-btn'>
            Get a Plan Now
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};
export default App;
