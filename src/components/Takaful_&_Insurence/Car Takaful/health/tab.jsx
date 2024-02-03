import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import myself from '../../../../assets/Takaful/myself.png'
import family from '../../../../assets/Takaful/family.png'
import parents from '../../../../assets/Takaful/parents.png'
import Form from './form'
import Form1 from './form1'
import Form2 from './form2'
const App = () => {
  const [size, setSize] = useState('small');
  const pic = [myself, family, parents]
  const name = ["Myself", "Family", "Parents"]
  const arr = [<Form/>, <Form1/>, <Form2/>]
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div style={{ border: '1px solid #00bcf9', padding: '2rem 3rem', borderRadius: '10px' }}>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: <div>
                <img src={pic[id-1]} style={{width: '3rem'}}/>
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