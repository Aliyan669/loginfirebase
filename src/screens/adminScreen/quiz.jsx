import React, { useState } from "react";
import { sendData } from "../../config/firebasemethod";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Input from "../../componenets/input";
export default function Quiz() {
  let [main, setmain] = useState({});
  const [option, setOption] = useState("");
  const [arrOptions, setArrOptions] = useState([]);
  let [btnDisabled, setBtnDisabled] = useState(false);
  const [arrQuestions, setArrQuestions] = useState([]);
  let [course, setCourse] = useState([
    {
      fullName: "Graphic Design",
      id: "Graphic Designing",
    },
    {
      fullName: "UI & UX Design",
      id: "UI & UX Design",
    },
  ]);
  let sendquizData = () => {
    console.log(main);

    sendData(main, `quiz`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let nextSection = () => {
    setBtnDisabled(true);
  };
  const addValue = () => {
    setArrOptions([option, ...arrOptions]);
    fillQuestion("options", arrOptions);
  };
  const submitQuestion = () => {
    fillmain("question", arrQuestions);
  };
  let fillmain = (key, val) => {
    main[key] = val;
    setmain({ ...main });
    console.log(main);
  };
  let fillQuestion = (key, val) => {
    arrQuestions[key] = val;
    setArrQuestions({ ...arrQuestions });
    console.log(arrQuestions);
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
              <Grid item md={4}>
                <Input
                  label={"Quiz Name"}
                  required={true}
                  disabled={btnDisabled}
                  type={"text"}
                  onChange={(e) => {
                    fillmain("quizName", e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label={"Quiz Score"}
                  required={true}
                  disabled={btnDisabled}
                  type={"text"}
                  onChange={(e) => {
                    fillmain("quizScore", e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Course"
                    disabled={btnDisabled}
                    onChange={(e) => {
                      fillmain("course", e.target.value);
                    }}
                  >
                    {course.map((x, i) => {
                      return (
                        <MenuItem key={i} value={x.fullName}>
                          {x.fullName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Button
                  variant="contained"
                  className="high"
                  sx={{ marginLeft: "10px" }}
                  disabled={btnDisabled}
                  onClick={nextSection}
                >
                  Next
                </Button>
              </Grid>
              <Divider />
              {btnDisabled && (
                <>
                  <Grid item xs={12}>
                    <Input
                      label={"Question"}
                      required={true}
                      type={"text"}
                      onChange={(e) => {
                        fillQuestion("question", e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {arrOptions.length > 0 ? (
                      <Box>
                        <FormControl
                          sx={{ m: 3, textAlign: "left" }}
                          component="fieldset"
                          variant="standard"
                        >
                          <FormLabel component="legend">Options</FormLabel>
                          <FormGroup>
                            {arrOptions.map((e, i) => {
                              return (
                                <>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        onChange={(e) => {
                                          fillQuestion(
                                            "correctoption",
                                            e.target.checked
                                          );
                                        }}
                                        name={e}
                                      />
                                    }
                                    label={e}
                                  />
                                </>
                              );
                            })}
                          </FormGroup>
                        </FormControl>
                      </Box>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Input
                      label={"Option"}
                      required={true}
                      type={"text"}
                      onChange={(e) => {
                        setOption(e.target.value);
                      }}
                    />
                    <Button
                      className="high"
                      variant="contained"
                      sx={{ width: "150px" }}
                      onClick={addValue}
                    >
                      Add Option
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      sx={{ width: "150px" }}
                      className="high"
                      variant="contained"
                      onClick={submitQuestion}
                    >
                      Add Question
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      sx={{ width: "150px" }}
                      className="high"
                      variant="contained"
                      onClick={sendquizData}
                    >
                      Submit Form
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </div>
      </header>
    </div>
  );
}
