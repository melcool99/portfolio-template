import React from "react";
import {
  Grid,
  ListItem,
  Paper,
  Typography,
  Chip,
  Link,
  Box,
  List,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles, useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import { personalInfo } from "../../../assets/data/personalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    marginTop: "14px",
  },
  mainTitle: {
    display: "flex",
    padding: "4px 16px",
    fontWeight: "bold",
    justifyContent: "center",
  },
  items: {
    display: "flex",
    aligItems: "center",
    flexWrap: "wrap",
  },
  hobbies: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },

  coursesCertificate: {
    justifyContent: "flex-end",
  },

  stylePaper: {
    padding: "2px 5px",
    margin: "0 10px 10px 10px ",
    flex: 1,
    borderRadius: 12,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const contentSize = isMobile ? "body2" : "body1";

  return (
    <>
      <Grid container className={classes.root}>
        <Typography variant="h5" className={classes.mainTitle}>
          Skills
        </Typography>
        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Programming Skills
          </Typography>
          {personalInfo.skills.codingSkills.map((skill) => (
            <Box key={skill.id} className={classes.items}>
              {skill.languages.map((lang) => (
                <Chip
                  key={Math.random()}
                  label={lang}
                  variant="outlined"
                  color="secondary"
                  classes={{ root: classes.chip }}
                />
              ))}
            </Box>
          ))}
        </Paper>
        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Languages
          </Typography>
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
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Soft Skills
          </Typography>
          {personalInfo.skills.softSkills.map((skill) => (
            <ListItem dense key={`${skill} ${Math.random()}`}>
              <TimelineDot
                variant="outlined"
                color="primary"
                className={classes.dot}
              />
              <Typography variant={contentSize}>{skill}</Typography>
            </ListItem>
          ))}
        </Paper>

        <Paper className={classes.stylePaper} elevation={3}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Courses & Certifications
          </Typography>
          {personalInfo.skills.courses.map((course) => (
            <List key={course.id}>
              <ListItem dense key={course.url}>
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
              <ListItem className={!isMobile ? classes.coursesCertificate :''}>
                <Typography variant="subtitle2" color="secondary">
                  <Link
                    href={course.certificate}
                    target="_blank"
                    rel="noreferrer"
                    variant="inherit"
                    color="inherit"
                  >
                    See Certificate
                  </Link>
                </Typography>
              </ListItem>
            </List>
          ))}
        </Paper>
        <Paper className={clsx(classes.stylePaper)} elevation={3}>
          <Box>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Hobbies
            </Typography>
          </Box>
          <Box className={classes.hobbies}>
            {personalInfo.hobbies.map((hobbie) => (
              <Chip
                key={hobbie}
                label={hobbie}
                variant="outlined"
                color="secondary"
                classes={{ root: classes.chip }}
              />
            ))}
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default ResumeSkills;
