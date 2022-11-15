import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SMGrid from "../../componenets/smgrid";
import Input from "../../componenets/input";
import DropDown from "../../componenets/dropdown";
import { getData, sendData } from "../../config/firebasemethod";
function Cities() {
  const [main, setmain] = useState({});
  let AllMain = (key, val) => {
    main[key] = val;
    setmain({ ...main })
    console.log(main)
  }
  const [citiesList, setCitiesList] = useState([]);
  let City = () => {
    console.log(main);
    sendData(main, "cities")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let getCityData = () => {
    getData("cities")
      .then((res) => {
        setCitiesList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCityData();
  }, []);
  return (
      <div>
        <h1>Cities</h1>
        <Container>
          <Grid container>
            <Grid sx={{ padding: 2 }} md={4} item>
              <DropDown
                displayField="countryName"
                valueField="countryCode"
                label="Country"
                nodeName="countries"
                  onChange={(e) => AllMain("countryCode", e.target.value)}
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <Input
                label="City Name"
                onChange={(e) => AllMain("cityName", e.target.value)}
              />
            </Grid>
            <Grid sx={{ padding: 2 }} md={4} item>
              <Input
                label="City Code"
                onChange={(e) => AllMain("cityCode", e.target.value)}
              />
            </Grid>
            <Grid md={4} item>
              <Button onClick={City} variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <SMGrid
            datasource={citiesList}
            Cols={[
              {
                key: "id",
                displayName: "Id",
              },
              {
                key: "cityName",
                displayName: "City Name",
              },
              {
                key: "cityCode",
                displayName: "City Code",
              },
              {
                key: "countryCode",
                displayName: "Country Code",
              },
            ]}
          />
        </Container>
      </div>

  );
}
export default Cities;
