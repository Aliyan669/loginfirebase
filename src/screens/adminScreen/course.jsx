import React from 'react'

import { Grid, Box, Button } from "@mui/material";
import Input from '../../componenets/input';
import DropDown from '../../componenets/dropdown';
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { checkUser, sendData } from "../../config/firebasemethod";


export default function Course() {
    // const params = useParams();
    // const navigate = useNavigate();

    const [main, setMain] = useState({});
    let AllMain = (key, val) => {
      main[key] = val;
      setMain({ ...main });
      console.log(main);
    };

        let valueAdd = () => {
          sendData( 
            main , `AdminCourses/`
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
        <div className="course">
          <div className="why">
          <h1 className="couhead"> Create Courses </h1>
         
          </div>
          <Box className="register2">
            <Grid container spacing={2}>
            
             
              <Grid item md={4}>
                <DropDown
                  label="Course Name"
                  required={true}
                  data={[
                    {
                      id: 1,
                      fullName: "Graphics Design",
                    },
                    {
                      id: 2,
                      fullName: "UI UX Design",
                    },
                  ]}
                  onChange={(e) => AllMain("CourseName", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <DropDown
                  label="Course Duration"
                  required={true}
                  data={[
                    {
                      id: "8",
                      fullName: "8 Months",
                    },
                    {
                      id: "16",
                      fullName: "16 Months",
                    },
                  ]}
                  onChange={(e) => AllMain("Section", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Fees in Rupees"
                  value={main.Fees}
                  required={true}
                  onChange={(e) => AllMain("Fees", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <DropDown
                  label="Quiz No"
                  required={true}
                  data={[
                    {
                      id: "1",
                      fullName: "1",
                    },
                    {
                      id: "2",
                      fullName: "2",
                    },{
                        id: "3",
                        fullName: "3",
                      },
                  ]}
                  onChange={(e) => AllMain("QuizNo", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="FormOpen:Y/N"
                  value={main.formOpen}
                  required={true}
                  onChange={(e) => AllMain("formOpen ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Trainer Id"
                  value={main.TrainerId}
                  required={true}
                  onChange={(e) => AllMain("TrainerId ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Assistant Trainer"
                  value={main.AssistantTrainer}
                  required={true}
                  onChange={(e) => AllMain("AssistantTrainer", e.target.value)}
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
