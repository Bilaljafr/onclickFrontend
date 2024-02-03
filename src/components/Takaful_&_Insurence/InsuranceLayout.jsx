import React from 'react'
import { Outlet } from 'react-router-dom'
import DarkVariantExample from './TestCarousel'
import TestCarousel from './TestCarousel'

export const InsuranceLayout = () => {
  return (
    <>
    <Outlet/>
    <TestCarousel/>
    </>
  )
}
