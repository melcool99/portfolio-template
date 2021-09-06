import { CardHeader, Slide } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { personalInfo } from "../../data/personalInfo";
import GitHub from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";


const useStyles = makeStyles({
  root: {
    height: "100vh",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
  },

  cardRoot: {
    width: 300,
    minHeight: 300,
    margin: "20px",
   
  },
  cardActionBtn:{
    display:'flex',
    justifyContent:'space-between'
  },

  media: {
    height: 250,
    "&:hover": {
      transition: "all 0.5s ease-in-out",
      transform: "scale3d(1.1, 1.1, 0.3)",
    },
  },

  titleHeader: {
    display: "flex",
    justifyContent: "center",
  },
  titleHeaderText: {
    fontWeight: 600,
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Slide direction="down" in timeout={{enter:500}}>
        <Grid container className={classes.root}>
          <Box  className={classes.titleHeader}>
            <Typography variant="h4" className={classes.titleHeaderText}>
              Portfolio
            </Typography>
          </Box>
          <Box className={classes.cardContainer}>
            {personalInfo.projects.map((project) => (
              <Card
                className={classes.cardRoot}
                elevation={3}
                key={project.title}
              >
                <CardHeader title={project.title} />

                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                  />
                </CardActionArea>
                <CardActions className={classes.cardActionBtn}>
                  <IconButton
                    size="small"
                    color="primary"
                    href={project.url}
                    target="_blank"
                  >
                    <OpenInNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    <GitHub/>
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Grid>
      </Slide>
    </>
  );
};

export default Portfolio;