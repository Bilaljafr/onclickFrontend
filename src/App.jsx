import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './components/Home/Home';
import Promotions from './components/Home/Promotions';
import Contact from './components/Contact/contact';
import About from './components/About/About';
import CAR from './components/Takaful_&_Insurence/Car Takaful/car';
import BIKE from './components/Takaful_&_Insurence/Car Takaful/bike/bike';
import LIFE from './components/Takaful_&_Insurence/Car Takaful/life/life';
import HEALTH from './components/Takaful_&_Insurence/Car Takaful/health/health';
import Signin from './components/signIn/signIn';
import SignUp from './components/SignUp/signUp';
import Accordion from './components/Home/Accordian';
import UncontrolledExample from './components/Takaful_&_Insurence/TestCarousel';
import { InsuranceLayout } from './components/Takaful_&_Insurence/InsuranceLayout';
import TestimonailCard from './components/Takaful_&_Insurence/TestimonailCard';
import AutoComp from './components/Takaful_&_Insurence/Car Takaful/AutoComp';
import { useEffect, useState } from 'react';
import PlansMyself from './components/Takaful_&_Insurence/Car Takaful/health/planMyself';
import PlanParents from './components/Takaful_&_Insurence/Car Takaful/health/planParents';
import PlansFamily from './components/Takaful_&_Insurence/Car Takaful/health/planFamily';
import CommCarPlan from './components/Takaful_&_Insurence/Car Takaful/commercialPlan';
import PersCarPlan from './components/Takaful_&_Insurence/Car Takaful/personalPlan';
import BikePlan from './components/Takaful_&_Insurence/Car Takaful/bike/bikePlan';
import axios from 'axios';
import AddressForm from './Checkout/AddressForm';
import Checkout from './Checkout/Checkout';
import localHost from './localHost';



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='insurance' element={<InsuranceLayout />}>

        <Route path='car' element={<CAR />} />
        <Route path='bike' element={<BIKE />} />
        <Route path='life' element={<LIFE />} />
        <Route path='health' element={<HEALTH />} />
      </Route>
      <Route path='signIn' element={<Signin />} />
      <Route path='/insurance/plansMyself' element={<PlansMyself />} />
      <Route path='/insurance/plansParents' element={<PlanParents />} />
      <Route path='/insurance/plansFamily' element={<PlansFamily />} />
      <Route path='/insurance/commercialCarPlan' element={<CommCarPlan />} />
      <Route path='/insurance/personalCarPlan' element={<PersCarPlan />} />
      <Route path='/insurance/bikePlan' element={<BikePlan />} />
      <Route path='/insurance/plan/checkout/:id' element={<Checkout />} />
      <Route path='signup' element={<SignUp />} />

    </Route >

  ))

  useEffect(() => {
    axios.get(`${localHost}`)
  }, [])
  const [state, setState] = useState("");
  return (
      <RouterProvider router={router} />
  )

}

export default App
