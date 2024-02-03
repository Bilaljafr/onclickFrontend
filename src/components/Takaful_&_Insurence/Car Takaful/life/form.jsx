import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, InputNumber, Steps } from 'antd';
import { LoginOutlined } from '@mui/icons-material';
import income from '../../../../assets/About/income.png'
import ComboBox from '../AutoComp';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
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
  const [curr, setCurr] = useState(0);
  const [details, setdetails] = useState();
  const [loginDetails, setLoginDetails] = useState();
  const [profileDetails, setProfileDetails] = useState();
  const [Profile, setProfile] = useState(null)
  const onFinishLoginForm = (values) => {
    setCurr(1);

  };
  const onFinishProfileForm = (values) => {
    setCurr(2);
  };
  const updateValueLogin = (values) => {
    setLoginDetails(values)
  }
  const updateValueProfile = (values) => {
    setProfileDetails(values)
    
  }
  const navigate = useNavigate();
  const finishBtn = () => {
    let data = { ...loginDetails, ...profileDetails }
    axios.post(`${localHost}lifeInsurance`, {
      data
    }).then(function (response) {
      localStorage.setItem("lifeFormData", JSON.stringify(response.data.message))
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
  }
  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={updateValueLogin} />,
    <ProfileForm onFinish={onFinishProfileForm} initialValues={updateValueProfile} />,
    <Finish onFinish={finishBtn} />
  ]
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false || Profile === null
    }
    if (stepNumber === 1) {
      return details === null || Profile === null
    }
    if (stepNumber === 2) {
      return details === null || Profile === null
    }
  }
  return (
    <div style={{ border: '1px solid #00bcf9', padding: '2rem 3rem', borderRadius: '10px' }}>
      <div className='car-form'>
        <img src={income} style={{ width: "5rem", height: "5rem" }} />
        <h3>Let's get connected</h3>
              </div>
      <div>

      </div>
      <div className='App'>
        <Steps style={{ padding: '32px 16px' }}
          onChange={setCurr}
          current={curr}>
          <Steps.Step title="User Info" disabled={isStepDisabled(0)} icon={<LoginOutlined />} />
          <Steps.Step title="Question" disabled={isStepDisabled(1)} icon={<LoginOutlined />} />
          <Steps.Step title="Finsih" disabled={isStepDisabled(2)} icon={<LoginOutlined />} />
        </Steps>
        {forms[curr]}
      </div>
    </div>
  )
};
function LoginForm({ onFinish, initialValues }) {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [profession, setProfession] = useState()
  const [marital, setMarital] = useState("Single")
  const [childAges, setChildAges] = useState()
  let childrens = childAges?.split(",")
  let childrensDetails = {};
  childrens?.map((v,i)=>{
    let childNo = `Child${i+1}`
    childrensDetails[childNo] = v
  })
  let updateValue = {
    fullName,
    email,
    phone,
    profession,
    maritalStatus: marital,
    childrensDetails
  }


  function handleChangeProfession(e) {
    setProfession(e)
  }
  function handleChangeMarital(e) {
    setMarital(e)
  }
  const pro = ["Job", "Business"]
  const sta = ["Single", "Married", "Divorced", "Widow"]


  return (
    <Form
      {...layout}
      name="control-hooks"
      onFinish={onFinish}
      initialValues={initialValues}
      style={{
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'start',
        marginRight: 10
      }}
    >
      <Form.Item>
        <TextField
          label="Your name"
          type={"text"}
          style={{ width: '21rem' }}
          onChange={(e) => setFullName(e.target.value)}
          required />
      </Form.Item>
      <Form.Item>
        <TextField
          label="Your email"
          type={"email"}
          style={{ width: '21rem' }}
          onChange={(e) => setEmail(e.target.value)}
          required />
      </Form.Item>
      <Form.Item>
        <PhoneInput
        inputStyle={{width: '21rem', height: '3rem',color:'green'}}
        inputProps={{
          name: 'phone',
          required: true,
        }}
          country={Number}
          rules={{ required: true }}
          value={phone}
          onChange={setPhone}/>
      </Form.Item>
      <Form.Item>
        <ComboBox label={'Profession'} data={pro} handleChange={handleChangeProfession} />
      </Form.Item>
      <Form.Item style={{ marginTop: '-1.5rem' }}>
        <ComboBox label={'Marital Status'} data={sta} handleChange={handleChangeMarital} />
      </Form.Item>
      {
        (marital !== "Single") ?
          (<div style={{ marginTop: "-2rem" }}>
            <p style={{ fontSize: '0.55rem', marginBottom: '0.5rem' }}>If no child leave empty</p>
            <Form.Item
              rules={[
                {
                  required: true,

                },
              ]}
            >
              <TextField
                id="outlined-number"
                label="Ages of Child (5,3,6,7)"
                type="text"
                style={{ width: '21rem' }}
                InputProps={{ inputProps: { min: 18, max: 75 } }}
                onBlur={(e) => setChildAges(e.target.value)}
              />
            </Form.Item>
            <p style={{ fontSize: '0.55rem', marginTop: '-1.2rem', marginBottom: '1rem' }}>Add multiple ages separated by comma (,)</p>
          </div>)
          : null
      }
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType='submit'
          style={{ padding: '0rem 4rem', fontWeight: '600' }}
          className='form-btn'
          onClick={() =>initialValues({ ...updateValue })}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}
function ProfileForm({ onFinish, initialValues }) {
  const [familyExpense, setFamilyExpense] = useState()
  const [childFund, setchildFund] = useState()
  const [pension, setPension] = useState()
  const option = ["Yes", "No"]
  function handleChangeFE(e) {
    setFamilyExpense(e)
  }
  function handleChangeCF(e) {
    setchildFund(e)
  }
  function handleChangePen(e) {
    setPension(e)
  }
  const updateValue = {
    familyExpense,
    childFund,
    pension
  }
  return (
    <Form
      onFinish={onFinish}
      style={{
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'start',
        marginRight: 10
      }}
    >
      <Form.Item>
        <div style= {{width: "20rem" }}>
        <p style={{ fontSize: '0.55rem', fontWeight: "600"}}>Did you arranged your Family's Monthly expenses in case of Death?</p>
        <p style={{ fontSize: '0.55rem', fontWeight: "600", marginBottom: '1rem' }}>کیا آپ نے موت کی صورت میں اپنے خاندان کے ماہانہ اخراجات کا بندوبست کیا؟</p>
        </div>
        <ComboBox label={'Select option'} data={option} handleChange={handleChangeFE} />
      </Form.Item>
      <Form.Item style={{ marginTop: '-1.5rem' }}>
      <div style= {{width: "20rem" }}>
        <p style={{ fontSize: '0.55rem', fontWeight: "600"}}>Did you arranged your Children's Monthly School Fee and High Education fund in case of Death?
        </p>
        <p style={{ fontSize: '0.55rem', fontWeight: "600", marginBottom: '1rem' }}>کیا آپ نے موت کی صورت میں اپنے بچوں کی ماہانہ اسکول فیس اور ہائی ایجوکیشن فنڈ کا بندوبست کیا ہے؟</p>
        </div>
        <ComboBox label={'Select option'} data={option} handleChange={handleChangeCF} />
      </Form.Item>
      <Form.Item style={{ marginTop: '-1.5rem' }}>
      <div style= {{width: "20rem" }}>
        <p style={{ fontSize: '0.55rem', fontWeight: "600"}}>Did you arranged grom your Retirement Monthly Pension?
        </p>
        <p style={{ fontSize: '0.55rem', fontWeight: "600", marginBottom: '1rem' }}>کیا آپ نے اپنی ریٹائرمنٹ کی ماہانہ پنشن سے بندوبست کیا؟</p>
        </div>
        <ComboBox label={'Select option'} data={option} handleChange={handleChangePen} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{ margin: '0rem 0rem' }}
          className='form-btn'
          onClick={() => initialValues({ ...updateValue })}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}
function Finish({ onFinish }) {
  return (
    <Button type="primary" htmlType="submit"
      style={{ padding: '0rem 4rem', fontWeight: '600' }}
      className='form-btn'
      onClick={() => onFinish()}>
      See Plan
    </Button>
  )
}
export default App;