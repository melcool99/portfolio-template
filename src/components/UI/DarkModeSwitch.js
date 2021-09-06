import React from "react";
import { Box, IconButton, Switch as Toggle } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  switchBtn: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem",
  },
}));
const DarkModeSwitch = ({ isMobile, darkMode, setDarkmode }) => {
  const classes = useStyles();
  return (
    <>
      {!isMobile ? (
        <Box color="secondary" className={classes.switchBtn}>
          <WbSunnyIcon
            fontSize="small"
            color={!darkMode ? "primary" : "inherit"}
          />
          <Toggle
            checked={darkMode}
            onChange={() => setDarkmode(!darkMode)}
            color="primary"
            name="darkMode"
            size="small"
          />

          <Brightness3Icon
            fontSize="small"
            color={darkMode ? "primary" : "inherit"}
          />
        </Box>
      ) : (
        <IconButton onClick={() => setDarkmode(!darkMode)}>
          {!darkMode ? (
            <WbSunnyIcon color={darkMode ? "inherit" : "primary"} />
          ) : (
            <Brightness3Icon color={darkMode ? "primary" : "inherit"} />
          )}
        </IconButton>
      )}
    </>
  );
};

export default DarkModeSwitch;
