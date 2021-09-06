import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
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
const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 90,
    marginLeft: 4,
  },

  paperAnchorLeft: {
    borderRight: 0,
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

 navItemsSelectedDark:{
   color:'#e65100',
   "& .MuiListItemIcon-root": {
    color:'#e65100'
  },
   '&:hover':{
     color:'white'
   }
 },

  navIcons: {
    justifyContent: "center",
  },
}));

const Navbar = ({ isMobile, darkMode, setDarkmode }) => {
  const classes = useStyles();
  // const theme = useTheme();
  const location = useLocation();

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
      <List component="nav" >
        {/* <ListItem className={classes.navItems}>
          <DarkModeSwitch darkMode={darkMode} setDarkmode={setDarkmode} isMobile={isMobile}/>
        </ListItem> */}
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            dense
            component={NavLink}
            to={item.path}
            className={classes.navItems}
            selected={item.path === location.pathname}
            classes={{selected: classes.navItemsSelectedDark}}
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
