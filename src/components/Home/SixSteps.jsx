import React from 'react'
import cliamBlue from '../../assets/icons/claimB.png'
import cliam from '../../assets/icons/claim.jpg'
import tf from '../../assets/icons/24.jpg'
import tfB from '../../assets/icons/24B.png'
import docuB from '../../assets/icons/docuB.png'
import docu from '../../assets/icons/docu.jpg'
import easyB from '../../assets/icons/easyB.png'
import easy from '../../assets/icons/easy.jpg'
import reasonB from '../../assets/icons/reasonB.png'
import reason from '../../assets/icons/reason.jpg'
import transB from '../../assets/icons/transB.png'
import trans from '../../assets/icons/trans.jpg'

import { useState } from 'react'
export default function SixSteps() {
  return (
    <div className="six-steps">
        <h2 style={{textAlign: "center",fontSize:"2rem",padding:"2rem 0"}}>Why Choose Us</h2>
        <div className="six-card">
            <Card heading={'Cliams assistance'} description={'Your policy claim is on us. Just let us know!'} imgb={cliamBlue} imgw={cliam} />
            <Card heading={'Documentation'} description={'focuses on your ease and convenience, with minimal documents'} imgb={docuB} imgw={docu}/>
            <Card heading={'24/7 Emergency Help'} description={'we are always here 24/7 to answer your questions and offer help'} imgb={tfB} imgw={tf}/>
            <Card heading={'Transparent Work'} description={'We give clear, succinct and complete data to our clients'} imgb={transB} imgw={trans}/>
            <Card heading={'Simple and Easy To Use'} description={'Our fast cycle is intended to guarantee minimal measure of problem'} imgb={easyB} imgw={easy}/>
            <Card heading={'Reasonable Rates'} description={'The best market rates guarantee that our clients make out really well'} imgb={reasonB} imgw={reason}/>
        </div>
    </div>
  )
}
function Card({heading,description,imgb,imgw}){
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return(
          
        <div className="card-normal w-96 bg-base-100 shadow-xl" style={{textAlign:"center",margin:"1rem"}}>
  <figure><img 
    src={isHovered ? imgw : imgb}
    alt="Image"
    onMouseEnter={handleHover}
    onMouseLeave={handleHover} style={{height:"6rem", display:"block" ,margin:"0 auto"}} /></figure>
  <div className="card-body">
    <h2 className="card-title" style={{fontSize:"1rem" ,margin:"0 auto"}}>
      {heading}
    
    </h2>
    <p style={{textAlign:"center"}}>{description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    )
}
