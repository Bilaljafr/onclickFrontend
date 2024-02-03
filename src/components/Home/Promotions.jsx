import React from 'react'
import { Carousel } from 'antd';
export default function Promotions() {
  return (
    <div className="promo-holder" style={{ background: "azure" }}>
      <h2 style={{ textAlign: "center", padding: "3rem 0", fontSize: "3rem", fontWeight: "600" }}>Promotions</h2>
      <div className='promotion-slider'>
        <App />
      </div>

    </div>
  )
}

const contentStyle = {
  height: '14rem',
  color: '#fff',
  background: '#364d79',
};
const App = () => (
  <div>
    <Carousel autoplay
      slidesToShow={2}
      dots={false}
      className='car'
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Carousel>
  </div>

);

function Card() {
  return (
    <div className="card-side	w-90	 bg-base-100 shadow-xl promo-card">
      <figure><img style={{width:'100%'}} src="https://images.unsplash.com/photo-1695653422468-e28c0b88c143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt="Shoes" className='' /></figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
      </div>
    </div>
  )
}