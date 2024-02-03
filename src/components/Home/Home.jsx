import React, { useEffect } from 'react'
import Section1 from './Section1'
import Promotions from './Promotions'
import SixSteps from './SixSteps'
import Faq from './Faq'
import AboutCard from '../About/AboutCard'

export default function Home() {

  return (
    <>
    <Section1/>
    {/* <Promotions/> */}
    <SixSteps/>
    <AboutCard/>
    <Faq/>
    </>
  )
}
