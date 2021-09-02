import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { useLocation } from "react-router";

export const menuItems = [
  {
    text: "Resume",
    icon: <SchoolIcon />,
    color: "secondary",
    path: "/",
  },
  {
    text: "Porfolio",
    icon: <BusinessCenterIcon />,
    color: "secondary",
    path: "/portfolio",
  },
];
const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 70,
  },
  // menuButton: {
  //   '&.active':{
  //     color:'#ffbb93'
  //   },
  //   '&:hover':{
  //     color:'#ffbb93'
  //   },
  // },
  paperAnchorLeft: {
    borderRight: 0,
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
   
  },

  navIcons: {
    justifyContent: "center",
    color: "#e65100",
    
  
  },
}));

const Navbar = ({ isMobile }) => {
  const classes = useStyles();
  // const theme = useTheme();
  const location = useLocation()

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
        paperAnchorLeft: classes.paperAnchorLeft,
      }}
      className={classes.drawer}
      open={!isMobile}
    >
      <List component="nav">
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            dense
            component={Link} to={item.path}
            className={classes.navItems}
            selected={item.path === location.pathname}
          >
            <ListItemIcon className={classes.navIcons}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
