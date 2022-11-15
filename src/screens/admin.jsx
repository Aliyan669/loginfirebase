import * as React from "react";
import { Container } from "@mui/system";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "../App.css";
import Course from "./adminScreen/course";
import Quiz from "./adminScreen/quiz";
import Student from "./adminScreen/student";
import Countries from "./adminScreen/countries";
import Cities from "./adminScreen/cities";
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [navItems, setNaveItems] = React.useState([,]);
  const drawer = (
    <div className="side">
      <Divider />
      <List sx={{ display: { xs: "block", sm: "none" } }}>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon()}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            route: "student",
            name: "Student Data",
            icon: () => <InboxIcon />,
          },
          {
            route: "course",
            name: "Course",
            icon: () => <MailIcon />,
          },
          {
            route: "quiz",
            name: "Quiz",
            icon: () => <MailIcon />,
          },
          {
            route: "countries",
            name: "Country",
            icon: () => <InboxIcon />,
          },
          {
            route: "cities",
            name: "City",
            icon: () => <MailIcon />,
          },
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(text.route);
              }}
            >
              <ListItemIcon>{text.icon()}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box className="drawerwhy" sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="drawer">
          <Typography variant="h6" sx={{ margin: "10px" }}>
            Admin Screen
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}></Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Routes>
            <Route path="course" element={<Course />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="student" element={<Student />} />
            <Route path="countries" element={<Countries />} />
            <Route path="cities" element={<Cities />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
