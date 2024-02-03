import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useState } from 'react';


export default function ComboBox({label,data, handleChange}) {
  const [carType,setCarType]=useState('');

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      style={{width:"21rem",height:"3rem",marginBottom:'2rem'}}
      renderInput={(params) => <TextField {...params} label={label} onBlur={()=>handleChange? handleChange(params.inputProps.value): ''} required/>}
    />
  );
}
