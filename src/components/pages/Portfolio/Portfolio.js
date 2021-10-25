import { Box, CardHeader, Container, Grid, Typography, Zoom } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import GitHub from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import { personalInfo } from "../../../assets/data/personalInfo"


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
    fontWeight:700
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
      <Zoom  in timeout={{enter:500, exit:500}}>
        <Container>
        <Grid container className={classes.root}>
          <Typography variant ='h4'className={classes.titleHeader}>
            Portfolio
            </Typography>
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
        </Container>
      </Zoom>
    </>
  );
};

export default Portfolio;
