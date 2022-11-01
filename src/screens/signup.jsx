import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Button from "@mui/material/Button";
import { signUpUser } from "../config/firebasemethod";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
export default function Signup() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);   
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  let nav = () => {
    navigate("/login");   
  };
  let signUp = () => {
    setLoader(true);
    signUpUser({
      email,
      password,
      userName,
      contact,
    })
      .then((success) => {
        alert(success);
        setLoader(false);
        nav();
      })
      .catch((error) => {
        alert(error);
        setLoader(false);
      });
  };
  return (
    <div className="main">
      <h1 className="sign">SIGN UP</h1>
      <Box>
        <Box>
          <TextField
            className="inp"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{ marginTop: " 30px", marginBottom: "30px" }}>
          <TextField
            className="inp"
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{ marginTop: " 30px", marginBottom: "30px" }}>
          <TextField
            className="inp"
            label="Contact"
            onChange={(e) => setContact(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{ marginTop: " 30px", marginBottom: "30px" }}>
          <TextField
            className="inp"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </Box>
      </Box>
      <Button
        className="high"
        onClick={signUp}
        sx={{ marginRight: "300px" }}
        variant="contained"
        disabled={loader}
      >
        {loader ? <CircularProgress className="spin" /> : "Sign Up"}
      </Button>
    </div>
  );
}
 