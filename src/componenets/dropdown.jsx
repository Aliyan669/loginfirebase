import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';

export default function DropDown(props) {

const {label,onChange,data,required,value } = props

  return (
  <>
        <Box>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
        variant='standard'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   fullWidth={true}
          className='drop'
          onChange={onChange}
          label={label}
          required={required}
        >
            {data && data.length > 0 ? data.map((x,i)=><MenuItem key={i} value={x.id}>{x.fullName}</MenuItem> ) :"error" }
        </Select>
        </Box>
        </>
  );
}
