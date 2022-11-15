import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkUser, getData, sendData } from "../config/firebasemethod";
// import { TextField } from "@mui/material";
import Input from "../componenets/input";
import { Grid, Box, Button } from "@mui/material";
import DropDown from "../componenets/dropdown";
import "../App.css";
// import Birth from "./birth";

function Registration() {
  // const params = useParams();
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

  let nav = () => {
    navigate("/login");
  };
  let valueAdd = () => {
    sendData(main, `students`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(() => {
  //     getData('students').then((res)=>{
  //       console.log(res)
  //     })
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="register">
          <div className="why">
            <h1 className="regis">Registration Form </h1>
            <Button onClick={nav} variant="contained" className="admin">
              Admin
            </Button>
          </div>
          <Box className="register2">
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Input
                  label="First Name"
                  value={main.firstName}
                  required={true}
                  onChange={(e) => AllMain("firstName", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Last Name"
                  value={main.lastName}
                  required={true}
                  onChange={(e) => AllMain("lastName ", e.target.value)}
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
                  onChange={(e) => AllMain("course", e.target.value)}
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
                  onChange={(e) => AllMain("section", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Contact"
                  value={main.contact}
                  required={true}
                  onChange={(e) => AllMain("contact", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Email"
                  value={main.email}
                  required={true}
                  onChange={(e) => AllMain("email", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="CNIC"
                  value={main.cnic}
                  required={true}
                  onChange={(e) => AllMain("cnic ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Name"
                  value={main.fatherName}
                  onChange={(e) => AllMain("fatherName ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Cnic"
                  value={main.fatherCnic}
                  onChange={(e) => AllMain("fatherCnic ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Father Contact"
                  value={main.fatherContact}
                  onChange={(e) => AllMain("fatherContact ", e.target.value)}
                />
              </Grid>
              <Grid item md={4}>
                <Input
                  label="Emergency Contact"
                  value={main.emergencyContact}
                  onChange={(e) => AllMain("emergencyContact ", e.target.value)}
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
export default Registration;
