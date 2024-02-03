import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import myself from '../../../assets/Takaful/myself.png'
import personal from '../../../assets/Takaful/PERSONAL.png'
import COMMERCIAL from '../../../assets/Takaful/COMMERCIAL.png'

import Form from './personal'
import Form1 from './commercial'
// // import Form1 from './form1'
const App = () => {
  const [size, setSize] = useState('small');
  const pic = [personal, COMMERCIAL]
  const name = ["Personal Car", "Commercial Car"]
  const arr = [<Form/>, <Form1/>]
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div style={{ border: '1px solid #00bcf9', padding: '2rem 3rem', borderRadius: '10px', marginBottom: '1rem' }}>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: <div>
                <img src={pic[id-1]} style={{width: '4rem'}}/>
                <p style={{fontSize: '0.7rem'}}>{name[id-1]}</p>
            </div>,
            key: id,
            children: arr[id-1],
          };
        })}
      />
    </div>
  );
};
export default App;