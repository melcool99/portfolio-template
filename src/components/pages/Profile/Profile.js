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
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../Footer";
import { personalInfo } from "../../data/personalInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(122, 111, 92, 0.3)",
    backdropFilter: "blur(13px) saturate(100%)",
    borderRadius: 12,
    height: "100vh",
    width: "100%",
  },

  profileItems: {
    display: "flex",
    height: "100vh",
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
  contactIcons: {
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
  box: {
    padding: "10px",
  },
}));

const Profile = ({ isMobile }) => {
  const classes = useStyles();

  
 const onClickHandler = (e) => {
  const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
  const link = document.createElement("a");
  link.href = `${linkTo}:${e.target.innerText}`;
  link.click();
 }
 

  return (
    <>
      {!isMobile && (
        <Paper className={classes.root}>
          {personalInfo.personalProfile.map((profile) => (
            <List key={Math.random()} className={classes.profileItems}>
              <ListItem className={classes.avatarInfo}>
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
                    target="_blank"
                  >
                    <GitHubIcon color="primary" />
                  </IconButton>
                  <IconButton
                    href={profile.socialMediaLinks.linkedInUrl}
                    target="_blank"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Box>
              </ListItem>
              <ListItem className={classes.contactInfo}>
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    alignItems="center"
                    classes={{ root: classes.box }}
                  >
                    <Button
                      size="small"
                      onClick={onClickHandler}
                    >
                      <PhoneIcon />
                      <Typography style={{ marginLeft: "5px" }}>
                        {profile.phone}
                      </Typography>
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    classes={{ root: classes.box }}
                  >
                    <Button
                      size="small"
                      style={{ textTransform: "lowercase" }}
                      onClick={onClickHandler}
                    >
                      <EmailIcon />
                      <Typography style={{ marginLeft: "5px" }}>
                        {profile.email}
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </ListItem>
              <ListItem className={classes.butonItem}>
                <ResumeBtn />
              </ListItem>
              <ListItem className={classes.footerStyle}>
                <Footer />
              </ListItem>
            </List>
          ))}
        </Paper>
      )}
    </>
  );
};

export default Profile;
