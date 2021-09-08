import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";



const useStyles = makeStyles((theme) => ({
  menuBtn: {
    position: "fixed",
    top: "5px",
    right: "5px",
    zIndex: 900,
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

const MenuBtn = ({ onClick, isMobile, open }) => {
  const classes = useStyles();
  return (
    <div>
      {isMobile && (
        <Fab
          size="small"
          color="primary"
          aria-label="menu"
          className={classes.menuBtn}
          onClick={onClick}
          style= {{display: open ? 'none': null}}
        >
         <MenuIcon />
        </Fab>
      )}
    </div>
  );
};

export default MenuBtn;
