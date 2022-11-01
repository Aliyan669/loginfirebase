import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../config/firebasemethod";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";


export default function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let login = () => {
    setLoader(true);
    loginUser({
      email,
      password,
    })
      .then((success) => {
       console.log(success);
        setLoader(false);
        navigate(`/admin`); 
      })
      .catch((err) => {
        console.log(err); 
        setLoader(false);
        navigate(`/signup`); 
        
      });
  };
  return (
    <div className="main">
      <h1 className="sign">LOGIN</h1>
      <Box>
        <Box>
          <TextField
            className="inp"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ marginTop: " 40px", marginBottom: "40px" }}>
          <TextField
            className="inp"
            label="Password"
            type="password"
            variant= "standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box className="press">
          <Button
            sx={{ marginRight: "300px" }}
            onClick={login}
            variant="contained"
            className="high"
            disabled={loader}
          >
            {loader ? <CircularProgress className="spin" /> : "Login"}
          </Button>
        </Box>
      </Box>
    </div>
  );
}
