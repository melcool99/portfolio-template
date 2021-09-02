import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Header/NavBar";
import Profile from "./components/layout/Header/Profile";
import MobileProfile from "./components/layout/Header/MobileProfile";
import Resume from "./components/pages/Resume/Resume";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import { makeStyles, CssBaseline, Paper } from "@material-ui/core";
import { Switch as Toggle } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuBtn from "./components/UI/MenuBtn";
import BackTopBtn from "./components/UI/BackTopBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "hidden",
    height: "100%",
  },
  rootPages: {
    overflowY: "auto",
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
  const scroll = window.pageYOffset
  console.log(scroll)
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
              handleOpenMenu={handleOpenMenu}
              isMobile={isMobile}
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
          <Toggle
            checked={darkMode}
            label="Dark Mode"
            onChange={() => setDarkmode(!darkMode)}
            color="primary"
            name="Dark Mode"
          />
          <Grid item className={classes.rootPages} xs>
            <Switch>
              <Route exact path="/">
                <Resume />
              </Route>
              <Route path="/portfolio">
                <Portfolio isMobile={isMobile} />
              </Route>
            </Switch>
          </Grid>
          <MenuBtn onClick={handleOpenMenu} isMobile={isMobile} open={open} />
        </Grid>
            {/* <BackTopBtn /> */}
        <CssBaseline />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
