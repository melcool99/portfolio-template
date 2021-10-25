import React from "react";

import { ListItemText, makeStyles, useTheme, List } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import { Box, Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

import { personalInfo } from "../../../assets/data/personalInfo";

const useStyles = makeStyles((theme) => ({
  root: {},
  timelineContent: {
    flex: 3,
    padding: "6px 16px",
  },
  paper: {
    padding: "2px 5px",
    borderRadius: "12px"
  
  },
  opositeItem: {
    flex: 1,
    padding: 0,
    textAlign: "left",
  },

  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
  listPadding: {
    padding: 0,
  },
}));

const WorkExperience = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root} key={Math.random()}>
      {isMobile ? (
        <Grid item>
          <Typography variant="h6" align="center" style={{fontWeight:'bold'}}>
            Experience
          </Typography>
          {personalInfo.jobs.map((job) => (
            <Timeline key={job.id}>
              <TimelineItem classes={{ root: classes.missingOppositeContent }}>
                <TimelineSeparator>
                  <TimelineDot  color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="caption">
                    <Box>
                      {job.year.start} - {job.year.end}
                    </Box>
                  </Typography>
                  <Typography variant="caption" style={{fontWeight:'bold'}}>{job.company}</Typography>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" color="primary" style={{fontWeight:'bold'}}>
                      {job.title}
                    </Typography>
                    {job.description.map((job) => (
                      <List
                        classes={{ root: classes.listPadding }}
                        key={Math.random()}
                      >
                        <ListItemText>
                          <Typography variant="body2">{job}</Typography>
                        </ListItemText>
                      </List>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </Grid>
      ) : (
        <Grid item>
          <Typography variant="h5" align="center" style={{fontWeight:'bold'}}>
            Experience
          </Typography>
          <Timeline>
            {personalInfo.jobs.map((job) => (
              <TimelineItem key={job.id}>
                <TimelineOppositeContent
                  classes={{ root: classes.opositeItem }}
                >
                  <Box >
                    <Typography variant="caption">
                      <Box>
                        {job.year.start} - {job.year.end}
                      </Box>
                    </Typography>
                    <Typography variant="caption">{job.company}</Typography>
                  </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant='outlined'>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent classes={{ root: classes.timelineContent }}>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" style={{fontWeight:'bold'}} color='primary'>{job.title}</Typography>
                    {job.description.map((job) => (
                      <Typography variant="body1" key={Math.random()}>
                        {job}
                      </Typography>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      )}
    </Grid>
  );
};
export default WorkExperience;
