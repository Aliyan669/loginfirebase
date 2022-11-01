import React from 'react';
import { TextField } from '@mui/material';

export default function Input (props) {
    const {label , onChange,disabled  ,type , value ,required , who} = props ;
  return (
    <>
    <TextField 
    label = {label}
    onChange={onChange}
    className={who}
    value={value}
    type={type}
    disabled={disabled}
    variant="outlined"
    required={required}
    />
    </>
  )
}
