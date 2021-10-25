import React from "react";
import ResumeSkills from "./ResumeSkills";
import Education from "./Education";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import WorkExperience from "./WorkExperience";
import { Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },

  paper: {
    padding: "5px 10px",
    minWidth: "200px",
    backgroundColor: "#555",
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Zoom in timeout={{ enter: 500, exit: 300 }}>
      <Container>
      <Grid container className={classes.root}>
        <Grid item className={classes.rootItems} md={6} lg={6} sm={6} xs={12}>
          <Education classes={classes.paper} />
          <WorkExperience classes={classes.paper} />
        </Grid>
        <Grid item className={classes.rootItems} md={6} lg={6} sm={6} xs={12}>
          <ResumeSkills />
        </Grid>
      </Grid>
      </Container>
    </Zoom>
  );
};

export default Resume;
