import React from "react";
import ResumeBtn from "../../UI/ResumeBtn";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import pozaprf from "../../images/pozaprf.jpg";
import { Box, Paper } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../Footer";
import { personalInfo } from "../../data/personalInfo";



const useStyles = makeStyles((theme) => ({

  root:{
    backgroundColor: "rgba(122, 111, 92, 0.3)",
    backdropFilter: "blur(13px) saturate(100%)",
    borderRadius:12
  },

  profileItems: {
    display: "flex",
    height:'100vh',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingTop: "2rem",
  },

  contactInfo: {
    justifyContent: "center",
    flex: 1,
  },

  iconButton: {
    "& :hover": {
      color: "white",
    },
  },
  box: {
    padding: "10px",
  },
  footerStyle: {
    justifyContent: "center",
  },

  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  butonItem: {
    justifyContent: "center",
    flex: 1,
  },
}));

const Profile = ({ isMobile,darkMode }) => {
  const classes = useStyles();

  return (
    <Paper  elevation={3} className={classes.root}>
     {!isMobile && (personalInfo.personalProfile.map((profile) => (
        <List  key={Math.random()} className={classes.profileItems}>
          <ListItem
            className={classes.avatarInfo}
          >
            <Avatar
              alt="profile picture"
              variant="circular"
              src={pozaprf}
              className={classes.avatarLarge}
            />
            <Typography variant="h4">
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="h5">{profile.occupation} </Typography>
            <Box className={classes.iconButton}>
              <IconButton
                href={profile.socialMediaLinks.githubUrl}
                target='_blank'
              >
                <GitHubIcon color='primary'/>
              </IconButton>
              <IconButton
                href={profile.socialMediaLinks.linkedInUrl}
                target='_blank'
              >
                <LinkedInIcon color='primary'/>
              </IconButton>
            </Box>
          </ListItem>
          <ListItem className={classes.contactInfo} >
            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                alignItems="center"
                classes={{ root: classes.box }}
              >
                <PhoneIcon />
                <Box style={{ marginLeft: "5px" }}>{profile.phone}</Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                classes={{ root: classes.box }}
              >
                <EmailIcon />
                <Box style={{ marginLeft: "5px" }}>{profile.email}</Box>
              </Box>
            </Box>
          </ListItem>
          <ListItem className={classes.butonItem} >
            <ResumeBtn />
          </ListItem>
          <ListItem className={classes.footerStyle}>
            <Footer />
          </ListItem>
        </List>
      )))
      }
    </Paper>
  );
};


export default Profile
