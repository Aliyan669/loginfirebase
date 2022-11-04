import "../App.css";
import { useEffect, useState } from "react";
// import Button from './Components/Button';
// import Header from "./todohead";
// import Btn from "./button";
import { useNavigate, useParams } from "react-router-dom";
import { checkUser, sendData } from "../config/firebasemethod";
// import { TextField } from "@mui/material";
import Input from "../componenets/input";
import { Grid, Box, Button } from "@mui/material";
import DropDown from "../componenets/dropdown";
import "../App.css";
// import Birth from "./birth";

function Todo() {
  const params = useParams();
  // let [txt, setTxt] = useState("Hello World!");
  // let [list, setList] = useState([]);
  const navigate = useNavigate();
  // const [userId, setUserId] = useState("");
  const [main, setMain] = useState({});
  let AllMain = (key, val) => {
    main[key] = val;
    setMain({ ...main });
    console.log(main);
  };
  //  useEffect(() => {
  //   checkUser()
  //     .then((res) => {
  //       console.log(res);
  //       if (params.id == res) {
  //         // setUserId(res);
  //       } else {
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
let  nav =()=> {
  navigate('/login')
}
  let valueAdd = () => {

    sendData({
      Student: main,
    },
      `students/`)
      .then((result=> { console.log(result) }))
      .catch((err => { console.log(err) }))
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="register">
          <div className="why">
          <h1 className="regis">Registration Form </h1>
          <Button onClick={nav} variant="contained" className="admin">Admin</Button>
          </div>
          <Box className="register2">
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Input
                  label="First Name"
                  value={main.FirstName}
                  required={true}
                  onChange={(e) => AllMain("First Name", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Last Name"
                  value={main.LastName}
                  required={true}
                  onChange={(e) => AllMain("LastName ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <DropDown
                  label="Course"
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
                  onChange={(e) => AllMain("Course", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <DropDown
                  label="Section"
                  required={true}
                  data={[
                    {
                      id: "a",
                      fullName: "Morning",
                    },
                    {
                      id: "b",
                      fullName: "Evening",
                    },
                  ]}
                  onChange={(e) => AllMain("Section", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Contact"
                  value={main.Contact}
                  required={true}
                  onChange={(e) => AllMain("Contact ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="CNIC"
                  value={main.Cnic}
                  required={true}
                  onChange={(e) => AllMain("Cnic ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Name"
                  value={main.FatherName}
                  onChange={(e) => AllMain("FatherName ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Cnic"
                  value={main.FatherCnic}
                  onChange={(e) => AllMain("FatherCnic ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Contact"
                  value={main.FatherContact}
                  onChange={(e) => AllMain("FatherContact ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Emergency Contact"
                  value={main.EmergencyContact}
                  onChange={(e) => AllMain("EmergencyContact ", e.target.value)}
                />
              </Grid>
              {/* <Grid item md={4}>
                <Birth
                  label="DateofBirth"
                  value={main.DateofBirth}
                  onChange={(e) => AllMain("DateofBirth ", e.target.value)}
                /> */}
              {/* </Grid> */}
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
  );
}
export default Todo;
