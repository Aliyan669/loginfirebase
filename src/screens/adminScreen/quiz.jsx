import React from 'react'

import { Grid, Box, Button } from "@mui/material";
import Input from '../../componenets/input';
import DropDown from '../../componenets/dropdown';
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { checkUser, sendData ,getData } from "../../config/firebasemethod";
export default function Quiz() {
    const params = useParams();
    // const navigate = useNavigate();
    const [main, setMain] = useState({});
    let AllMain = (key, val) => {
      main[key] = val;
      setMain({ ...main });
      console.log(main);
    };
        let valueAdd = () => {
          sendData( 
            main , `AdminQuiz/`
          )
            .then((success) => {
              console.log(success);
            })
            .catch((err) => {
              console.log(err);
            });
        };  
       
  return (
    <div className="App">
      <header className="App-header">
        <div className="quiz">
          <div className="why">
          <h1 className="couhead"> Create Quiz</h1>
         
          </div>
          <Box className="register2">
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Input
                  label="Question "
                  value={main.Question}
                  required={true}
                  who="who"
                  onChange={(e) => AllMain("Question", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Option 1"
                  value={main.Option1}
                  required={true}
                  onChange={(e) => AllMain("Option1 ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Option 2"
                  value={main.Option2}
                  required={true}
                  onChange={(e) => AllMain("Option2", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Option 3"
                  value={main.option3}
                  required={true}
                  onChange={(e) => AllMain("option3", e.target.value)}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "30px" }}>
              <Button className="btn" variant="contained" onClick={valueAdd}>
                Submit
              </Button>
            </Box>
          </Box>
        </div>
      </header>
    </div>
  )
}
