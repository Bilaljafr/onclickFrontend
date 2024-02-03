import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Slider from './Slider'
import Partners from './Partners'
export default function PageLayout() {
  return (
    <>

    <Header/>
    <Outlet/>
    <Partners/>
    <Footer/>
    </>

    )
}
