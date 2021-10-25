import React from "react";
import {IconButton } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";


const DarkModeSwitch = ({ darkMode, setDarkmode }) => {
  return (
    <>
        <IconButton onClick={(e) =>  setDarkmode(!darkMode)}>
          {!darkMode ? (
            <WbSunnyIcon color={darkMode ? "inherit" : "primary"} />
          ) : (
            <Brightness3Icon color={darkMode ? "primary" : "inherit"} />
          )}
        </IconButton>
    </>
  );
};

export default DarkModeSwitch;
