import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../config/firebasemethod";
import { useNavigate } from 'react-router-dom';
export default function Login() {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let nav =()=>{
    navigate('/todo')
  }
  let login = () => {
    loginUser({
      email,
      password,
    })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 className='sign'>Login</h1>
      <Box>
        <Box>
          <TextField
          className='inp'
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{marginTop:" 40px",marginBottom:"40px"}}>
          <TextField
          className='inp'
            label="Password"
            type="password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button sx={{marginLeft:"50px"}} onMouseEnter={nav} onClick={login} variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}



