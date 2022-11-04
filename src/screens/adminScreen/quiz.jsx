import React, { useState } from 'react'
import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Input from '../../components/Input';
import { sendData } from '../../config/firebasemethod';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '../../componenets/input';
export default function Quiz() {
  let [main, setmain] = useState({});
  const [option, setOption] = useState("")
  const [arrOptions, setArrOptions] = useState([])
  // let [selectedCourse, setSelectedCourse] = useState("");
  let [btnDisabled, setBtnDisabled] = useState(false);
  const [arrQuestions, setArrQuestions] = useState([])
  
  let [course, setCourse] = useState([
    {
      fullName: "Web and Mobile",
      id: "Web and Mobile"
    },

    {
      fullName: "Graphic Designing",
      id: "Graphic Designing"
    },
 
  ]
  );

  let sendquizData = () => {
    console.log(main)

    sendData({
      quiz: main,

    },
      `Quiz/`)
      .then((quiz => { console.log(quiz) }))
      .catch((err => { console.log(err) }))
  }

  let nextSection = () => {
    setBtnDisabled(true)
  }

  const addValue = () => {
    setArrOptions([option, ...arrOptions]);
    fillQuestion("options", arrOptions)
  };


  const submitQuestion = () => {
    fillmain("zuestion", arrQuestions)

  }

  let fillmain = (key, val) => {
    main[key] = val;
    setmain({ ...main })
    console.log(main)
  }


  let fillQuestion = (key, val) => {
    arrQuestions[key] = val;
    setArrQuestions({ ...arrQuestions })
    console.log(arrQuestions)
  }


  return (
    <>
      <Container sx={{  padding: "15px", borderRadius: "5px" }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
          </Grid>


          <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
            <Input
              label={"Quiz Name"}
              required={true}
              disabled={btnDisabled}
              type={"text"}
              onChange={(e) => { fillmain("quizName", e.target.value) }}
            />
            <Input
              label={"Quiz Score"}
              required={true}
              disabled={btnDisabled}
              type={"text"}
              onChange={(e) => { fillmain("quizScore", e.target.value) }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
  
                label="Course"
    
                disabled={btnDisabled}
                onChange={(e) => { fillmain("course", e.target.value) }}
              >
                {course.map((x, i) => {
                  return <MenuItem key={i} value={x.fullName}>{x.fullName}</MenuItem>

                })}
              </Select>
            </FormControl>
            <Grid item xs={12} sm={12} md={12}>
              <Button variant="contained"
              disabled={btnDisabled} onClick={nextSection}>Next</Button>
            </Grid>
          </Grid>

          <Divider />
   
          {btnDisabled &&

            <>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Input
                
                  label={"Question"}
                  required={true}
                  type={"text"}
                  onChange={(e) => {
                    fillQuestion("question", e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
            
                {arrOptions.length > 0 ? <Box sx={{ display: 'flex' }}>
                  <FormControl sx={{ m: 3, textAlign: "left" }} component="fieldset" variant="standard" >
                    <FormLabel component="legend">Options</FormLabel>
                    <FormGroup>
                      {arrOptions.map((e, i) => {
                        return <>
                          <FormControlLabel
                            control={
                              <Checkbox onChange={(e) => {
                                fillQuestion("correctoption", e.target.checked)
                              }} name={e} />
                            }
                            label={e}
                          />
                        </>
                      })}
                    </FormGroup>
                  </FormControl>
                </Box> : null}
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
                <Input
                  label={"Option"}
                  required={true}
                  type={"text"}
                  onChange={(e) => { setOption(e.target.value) }}
                />
                <Button variant="contained"  onClick={addValue}>Add Option</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained"  onClick={submitQuestion}>Add Question</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained"  onClick={sendquizData}>Submit Form</Button>
              </Grid>
            </>
          }

        </Grid>
      </Container></>
  )
}
