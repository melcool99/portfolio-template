import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import School from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { personalInfo } from "../../../assets/data/personalInfo";

const useStyles = makeStyles((theme) => ({
  opositeItem: {
    flex: 1,
    padding: 0,
    textAlign: "right",
  },
  timelineContent: {
    flex: 3,
    padding: "6px 16px",
  },
  paper: {
    padding: "3px 6px",
    borderRadius: "12px",
  },
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
}));

const Education = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root}>
      {isMobile ? (
        <Timeline>
          <Typography variant="h6" align="center" style={{fontWeight:'bold'}}>
            Education
          </Typography>
          {personalInfo.education.map((school) => (
            <TimelineItem
              key={school.id}
              classes={{ root: classes.missingOppositeContent }}
            >
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption">
                  <Box>
                    {school.year.start} - {school.year.end}
                  </Box>
                </Typography>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="body1" style={{fontWeight:'bold'}}>
                    {school.schoolName}
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold'}} color='primary'>{school.degree}</Typography>
                  <Typography variant="body2">{school.speciality}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Timeline>
          <Typography variant="h5" align="center" style={{fontWeight:'bold'}}>
            Education
          </Typography>
          {personalInfo.education.map((school) => (
            <TimelineItem key={school.id}>
              <TimelineOppositeContent classes={{ root: classes.opositeItem }}>
                <Typography variant="caption">
                  <Box>
                    {school.year.start} - {school.year.end}
                  </Box>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant='outlined'>
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent classes={{ root: classes.timelineContent }}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="body1" style={{fontWeight:'bold'}} >
                    {school.schoolName}
                  </Typography>
                  <Typography variant="body2" style={{fontWeight:'bold'}} color='primary'>{school.degree}</Typography>
                  <Typography variant="body1">{school.speciality}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Grid>
  );
};

export default Education;
