import React from 'react';
import { Carousel } from 'antd';
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.jpeg'
import partner3 from '../assets/partner3.jpeg'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import partner6 from '../assets/partner6.png'
import partner7 from '../assets/partner7.png'

import partner8 from '../assets/partner8.jpeg'

const Slider = () => (
  <Carousel
   autoplay
  dots={false}
  slidesToShow={4}
  >
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner2} alt="" className='slider-pic' />
         <img src={partner3} alt="" className='slider-pic' />
         <img src={partner4} alt="" className='slider-pic' />
         <img src={partner5} alt="" className='slider-pic' />
         <img src={partner6} alt="" className='slider-pic' />
         <img src={partner7} alt="" className='slider-pic' />
         <img src={partner8} alt="" className='slider-pic' />

  </Carousel>
);
export default Slider;