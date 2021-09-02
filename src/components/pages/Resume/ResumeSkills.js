import React from "react";
import {
  Grid,
  ListItem,
  Paper,
  Typography,
  Chip,
  Link,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles, useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

import { personalInfo } from "../../data/personalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
  },
  mainTitle: {
    display: "flex",
    marginTop: "14px",
    padding: "4px 16px",
    alignItems: "center",
    fontWeight:'bold',
    justifyContent:'center'
  },
  items: {
    display: "flex",
    aligItems: "center",
    flexWrap: "wrap",
  },
  stylePaper: {
    padding: "2px 5px",
    // backgroundColor: "#222",
    // color: "white",
    margin: "0 10px 10px 10px ",
    flex: 1,
  },
  dot: {
    marginRight: "8px",
  },
  chip: {
    margin: 4,
  },

  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
}));

const ResumeSkills = (props) => {
  const classes = useStyles();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const contentSize = isMobile ? 'body2' : 'body1'

  return (
    <>
      <Typography variant="h5" className={classes.mainTitle}>
        Skills
      </Typography>
      <Grid container className={classes.root}>
        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{fontWeight:'bold'}}>Programming Skills</Typography>
          {personalInfo.skills.codingSkills.map((skill) => (
            <Grid item key={skill.id} className={classes.items}>
              {skill.languages.map((lang) => (
                <Chip
                  key={Math.random()}
                  label={lang}
                  variant="outlined"
                  color="primary"
                  classes={{ root: classes.chip }}
                />
              ))}
            </Grid>
          ))}
        </Paper>
        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{fontWeight:'bold'}}>Languages</Typography>
          {personalInfo.skills.languages.map((lang) => (
            <Grid item key={lang.id} className={classes.items}>
              <ListItem dense key={Math.random()}>
                <TimelineDot
                  variant="outlined"
                  color="primary"
                  className={classes.dot}
                />
                <Typography variant={contentSize}>
                  {lang.title} ({lang.level})
                </Typography>
              </ListItem>
            </Grid>
          ))}
        </Paper>

        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{fontWeight:'bold'}}>Soft Skills</Typography>
          {personalInfo.skills.softSkills.map((skill) => (
            <Grid item key={`${skill} ${Math.random()}`} className={classes.items}>
              <ListItem dense>
                <TimelineDot
                  variant="outlined"
                  color="primary"
                  className={classes.dot}
                />
                <Typography variant={contentSize}>{skill}</Typography>
              </ListItem>
            </Grid>
          ))}
        </Paper>

        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{fontWeight:'bold'}}>Courses & Certifications</Typography>
          {personalInfo.skills.courses.map((course) => (
            <Grid item key={course.url} className={classes.items}>
              <ListItem dense key={Math.random()}>
                <TimelineDot
                  variant="outlined"
                  color="primary"
                  className={classes.dot}
                />
                <Typography variant={contentSize}>
                  <Link
                    href={course.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="inherit"
                    color="inherit"
                  >
                    {course.title}
                  <OpenInNewIcon fontSize="small" />
                  </Link>
                </Typography>
              </ListItem>
            </Grid>
          ))}
        </Paper>
      </Grid>
    </>
  );
};

export default ResumeSkills;
