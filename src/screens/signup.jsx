import React from 'react';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState  } from "react";
import Button from '@mui/material/Button';
import { signUpUser } from '../config/firebasemethod';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

 
  let signUp = () => {

    signUpUser({
      email,
      password ,
      userName ,
      contact
    })
      .then((success) => {
       console.log(success)
      })
      .catch((error) => {
       console.log(error)
      });
  };
  return (
    <div>
      <h1 className='sign'>SIGN UP</h1>
      <Box>
        <Box>
          <TextField className='inp'
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
              variant="standard"
          />
        </Box>
        <Box sx={{marginTop:" 30px",marginBottom:"30px"}}>
          <TextField className='inp'
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{marginTop:" 30px",marginBottom:"30px"}}>
          <TextField className='inp'
            label="Contact"
            onChange={(e) => setContact(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{marginTop:" 30px",marginBottom:"30px"}}>
          <TextField className='inp'
            label="Password"
            type="password"
           
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </Box>
      </Box>
      <Button  onClick={signUp} sx={{marginLeft:"50px"}} variant='contained'>Sign Up</Button>
    </div>
  )
}



