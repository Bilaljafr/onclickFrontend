import React from 'react';
import { Carousel } from 'antd';
import TestimonailCard from './TestimonailCard';
const contentStyle = {
  height: '350px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const TestCarousel = () => (
  <Carousel className='test' autoplay>
    <div>
      <TestimonailCard />
    </div>
    <div>
     < TestimonailCard />
    </div>
    <div>
    < TestimonailCard />
    </div>
    <div>
    < TestimonailCard />
    </div>
  </Carousel>
);
export default TestCarousel;