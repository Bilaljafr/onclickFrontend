import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, InputNumber, Steps } from 'antd';
import { LoginOutlined } from '@mui/icons-material';
import income from '../../../assets/About/income.png'
import ComboBox from './AutoComp';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import convertToWordsPKR from '../../amountConverter';
import localHost from '../../../localHost';

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
    const data = { ...loginDetails, ...profileDetails }
    axios.post(`${localHost}commercialPost`, {
      data
    }).then(function (response) {
      localStorage.setItem("FormData", JSON.stringify(response.data.message))
      Swal.fire(
        'Thank You!',
        'Our Team will contact you soon!',
        'success'
      );
      navigate('/insurance/commercialCarPlan');
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
    <div>
      <div className='car-form'>
        <img src={income} style={{ width: "5rem", height: "5rem" }} />
        <h3>Let's get connected</h3>
        <h1 style={{ textAlign: 'start', fontSize: '1.2rem', fontWeight: '600', marginLeft: '1.6rem' }}>For Commercial Cars</h1>
      </div>
      <div>

      </div>
      <div className='App'>
        <Steps style={{ padding: '32px 16px' }}
          onChange={setCurr}
          current={curr}>
          <Steps.Step title="Car Info" disabled={isStepDisabled(0)} icon={<LoginOutlined />} />
          <Steps.Step title="User Info" disabled={isStepDisabled(1)} icon={<LoginOutlined />} />
          <Steps.Step title="Finsih" disabled={isStepDisabled(2)} icon={<LoginOutlined />} />
        </Steps>
        {forms[curr]}
      </div>
    </div>
  )
};
function LoginForm({ onFinish, initialValues }) {

  const [carData, setCarData] = useState([])
  const [carName, setCarName] = useState()
  const [carYear, setCarYear] = useState()
  const [carModel, setCarModel] = useState()
  const [carPrize, setCarPrize] = useState()
  const [carType, setCarType] = useState([])
  useEffect(() => {
    const val = axios.get(`${localHost}commercialCar`)
    val.then(res => setCarData(res.data.message[0].carData))
  }, [])
  let updateValue = {
    carModel,
    carName,
    carYear,
    carPrize
  }

  const nameCar = carData.map((v, i) => (v.carName))
  function handleChangeCarName(e) {
    setCarName(e)
  }
  function handleChangeYear(e) {
    setCarYear(e)
  }
  function handleChangeModel(e) {
    setCarModel(e)
  }
  let carTypeI = -1
  if (carName) {
    carTypeI = carData.findIndex(v => carName == v.carName)
  }

  useEffect(() => {
    setCarType(carData[carTypeI]?.details.map(v => ((v.modelName))))
  }, [carName])
  const year = (carData[carTypeI]?.details[0].years)
  let years = year?.toString();
  years = years?.split(",")
  const [amount, setAmount] = useState()
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
        <ComboBox label={"select manufacturer"} data={nameCar} handleChange={handleChangeCarName} />
      </Form.Item>
      <Form.Item>
        <ComboBox label={'select model'} data={carType ? carType : []} handleChange={handleChangeModel} />
      </Form.Item>
      <Form.Item>
        <ComboBox label={'select manufacturing year'} data={years ? years : []} handleChange={handleChangeYear} />
      </Form.Item>
      <Form.Item>
        <TextField
          id="outlined-number"
          label="Value of car"
          type="number"
          style={{ width: '21rem' }}
          InputProps={{ inputProps: { min: 6000000, max: 40000000 } }}
          onBlur={(e) => setCarPrize(e.target.value)}
          onChange={(e) => setAmount(+(e.target.value))}
          required
        />
      </Form.Item>
      <p style={{margin: '-1.2rem 5px 0 5px', fontSize: '0.8rem', width: '21rem'}}>{amount ? 
      (convertToWordsPKR(amount)) : null}</p>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType='submit'
          style={{ padding: '0rem 4rem', margin:"1rem 0  0 0", fontWeight: '600' }}
          className='form-btn'
          onClick={() => initialValues({ ...updateValue })}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}
function ProfileForm({ onFinish, initialValues }) {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const updateValue = {
    fullName,
    email,
    phone
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
        <TextField
          label="Full name"
          type={"text"}
          style={{ width: '21rem' }}
          onChange={(e) => setFullName(e.target.value)}
          required />
      </Form.Item>
      <Form.Item>
        <TextField
          label="Email"
          type={"email"}
          style={{ width: '21rem' }}
          onChange={(e) => setEmail(e.target.value)}
          required />
      </Form.Item>
      <Form.Item>
        <PhoneInput
          inputStyle={{ width: '21rem', height: '3rem', color: 'green' }}
          inputProps={{
            name: 'phone',
            required: true,
          }}
          country={Number}
          rules={{ required: true }}
          value={phone}
          onChange={setPhone} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"
          style={{ padding: '0rem 4rem', fontWeight: '600' }}
          className='form-btn'
          onClick={() =>initialValues({ ...updateValue })}>
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