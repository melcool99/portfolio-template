import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/pages/NavBar";
import Profile from "./components/pages/Profile/Profile";
import MobileProfile from "./components/pages/Profile/MobileProfile";
import Resume from "./components/pages/Resume/Resume";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import { makeStyles, CssBaseline, Paper, Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuBtn from "./components/UI/MenuBtn";
import DarkModeSwitch from "./components/UI/DarkModeSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: "100%",
    // backgroundColor: "rgba(180, 159, 115, 0.48)",
    // backdropFilter: "blur(16px) saturate(180%)",
    // borderRadius:12
  },
  rootPages: {
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
}));

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkmode] = useState(true);
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },

    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#ff833a",
        main: "#e65100",
        dark: "#ac1900",
        contrastText: "#000",
      },
      secondary: {
        light: "#ffbb93",
        main: "#ff8a65",
        dark: "#c75b39",
        contrastText: "#000",
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOpenMenu = (e) => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Grid container>
          {!isMobile && (
            <NavBar
              openMenu={open}
              isMobile={isMobile}
              darkMode={darkMode}
              setDarkmode={setDarkmode}
            />
          )}
          <MobileProfile
            openMenu={open}
            handleOpenMenu={handleOpenMenu}
            isMobile={isMobile}
          />

          <Grid item md={3} lg={3} className={classes.aboutMe}>
            <Profile isMobile={isMobile} darkMode={darkMode} />
          </Grid>
          <Grid item className={classes.rootPages} xs>
            <Box className={classes.switchBtn}>
              <DarkModeSwitch
                isMobile={isMobile}
                setDarkmode={setDarkmode}
                darkMode={darkMode}
              />
            </Box>
            <Box>
              <Switch>
                <Route exact path="/">
                  <Resume/>
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
              </Switch>
            </Box>
          </Grid>
          <MenuBtn onClick={handleOpenMenu} isMobile={isMobile} open={open} />
        </Grid>
        <CssBaseline />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
