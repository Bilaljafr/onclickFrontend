import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Select, InputNumber, DatePicker, } from 'antd';

import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ComboBox from '../AutoComp';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
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
    let updateValue =values.childrensDetails?.length !== 0 ? values.childrensDetails?.split(",") : "";
    delete values.childrensDetails
    let updateData = {
      ...values,
      children_Age: updateValue
    }
    axios.post(`${localHost}familyInsurance`, {
      updateData
    }).then(function (response) {
      localStorage.setItem("FormData", JSON.stringify(response.data.message))
      Swal.fire(
        'Thank You!',
        'Our Team will contact you soon!',
        'success'
      );
      navigate('/insurance/plansFamily')
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
  const [value, setValue] = useState(true);
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [userAge, setUserAge] = useState()
  const [cash, setCash] = useState()
  const [spouseAge, setSpouseAge] = useState()
  const [childAges, setChildAges] = useState()
  let childrens = childAges?.split(",")
  let childrensDetails = {};
  childrens?.map((v, i) => {
    let childNo = `Child${i + 1}`
    childrensDetails[childNo] = v
  })
  let updateValue = {
    fullName,
    email,
    phone,
    userAge,
    spouseAge,
    childrensDetails,
    "insurancePrize": cash
  }
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
        <h1 style={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'start', margin: '1rem 0 0 0', letterSpacing: '1px' }}>Family Insurance</h1>
        <p style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'start', margin: '0.2rem 0 1rem 0', letterSpacing: '0px' }}>Get a plan in just simple steps!</p>
      </div>
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        name="control-hooks"
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
            inputStyle={{ width: '21rem', height: '3rem', color: 'green' }}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            country={Number}
            rules={{ required: true }} />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,

            },
          ]}
          name={['userAge']}
        >
          <TextField
            id="outlined-number"
            label="Select your age"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 59 } }}
            required
          />
        </Form.Item>
        <Form.Item
          name={['spouseAge']}
        >
          <TextField
            id="outlined-number"
            label="Select spouse age (if no spouse leave empty)"
            type="number"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 18, max: 59 } }}
          />
        </Form.Item>
        <p style={{ fontSize: '0.55rem', marginBottom: '0.5rem' }}>If no child leave empty</p>
        <Form.Item
          name={['childrensDetails']}
        >
          <TextField
            id="outlined-number"
            label="Ages of Child (5,3,6,7)"
            type="text"
            style={{ width: '21rem' }}
            InputProps={{ inputProps: { min: 0, max: 59 } }}
          />
        </Form.Item>
        <p style={{ fontSize: '0.55rem', marginTop: '-1.2rem', marginBottom: '1rem' }}>Add multiple ages separated by comma (,)</p>
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
