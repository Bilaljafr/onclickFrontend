import React from 'react'
import img1 from '../../assets/home/home-shape1.png'
import img2 from '../../assets/home/home-shape2.png'
import Items from './Items'

export default function Section1() {
  return (

    <section className='home-sec-1'>
        <img src={img1} alt="" style={{position:"absolute",top:"0px",right:"0",height:"20rem"}} />
        <img src={img2} alt="" style={{position:"absolute",bottom:"0px",left:"0",height:"30rem"}} />
        <h1 className="sec1-head" style={{position:'relative', zIndex: '99996'}}>
            Oneclick Digital Insurance
        </h1>
        <p className="sec1-desc" style={{position:'relative', zIndex: '99996'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem.
        </p>
        <Items/>
        </section>
  )
}
