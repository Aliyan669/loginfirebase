import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "../../componenets/input";
// import { sendData } from "../../config/firebasemethods";
import { sendData } from "../../config/firebasemethod";
function Countries() {
  const [main, setMain] = useState({});
  let AllMain = (key, val) => {
    main[key] = val;
    setMain({ ...main });
    console.log(main);
  };

  let saveCurrency = () => {
    console.log(main);
    sendData(main, "countries")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="country">
          <div className="why">
            <h1 className="couhead"> Country </h1>
          </div>
          <Box className="register2">
            <Grid container>
              <Grid sx={{ padding: 2 }} md={4} item>
                <Input
                  label="Country Name"
                  onChange={(e) => AllMain("country", e.target.value)}
                />
              </Grid>
              <Grid sx={{ padding: 2 }} md={4} item>
                <Input
                  label="Country Code"
                  onChange={(e) => AllMain("countrycode", e.target.value)}
                />
              </Grid>
              <Grid sx={{ padding: 2 }} md={4} item>
                <Input
                  label="Currency"
                  onChange={(e) => AllMain("currency", e.target.value)}
                />
              </Grid>
              <Grid md={4} item>
                <Button
                  className="high"
                  variant="contained"
                  sx={{ marginLeft: "20px" }}
                  onClick={saveCurrency}
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </header>
    </div>
  );
}
export default Countries;
