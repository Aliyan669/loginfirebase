import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";
// import Home from "../screens/home";
// import Button from "@mui/material/Button";
import "../App.css";
import ResponsiveDrawer from "../screens/admin";
import Registration from "../screens/registration";
function AppRouter() {
  return (
    <>
      <Router>
        {/* <div className="li">
          <Link className="link" to="signup">
            <Button className="btn" variant="contained">
              SIGNUP
            </Button>
          </Link>
          <Link className="link" to="login">
            <Button className="btn" variant="contained">
              LOGIN
            </Button>
          </Link>
        </div> */}
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Registration />} />
          {/* <Route path="*" element={<Notfound/>} /> */}
          <Route path="admin/*" element={<ResponsiveDrawer/>} />


        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
