import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import pozaprf from "../../images/pozaprf.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import  Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText  from "@material-ui/core/ListItemText";
import  ListItemIcon  from "@material-ui/core/ListItemIcon";
import { minWidth } from "@material-ui/system";
import ResumeBtn from "../../UI/ResumeBtn";
import { personalInfo } from "../../data/personalInfo";
import { menuItems } from "../NavBar";
import { NavLink } from "react-router-dom";
const drawerWidth =minWidth

const useStyles = makeStyles((theme) => ({
  

  socialMedia:{
    justifyContent:'center',
    flex:1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
    
  },
  listContainer:{
    height:'100vh',
    justifyContent:'center',
    display:'flex',
    flexDirection:'column',
  
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  avatarLarge: {
    width: theme.spacing(15),
    height: theme.spacing(15),
   
  },
  avatarStyle:{
    justifyContent:'center'
  },


}));


const MobileProfile = ({openMenu, handleOpenMenu, isMobile}) => {
  const classes = useStyles();
 
  return (
    <>
   {isMobile &&
      <Drawer 
       variant="temporary"
       anchor="left"
       className={classes.drawer}
       classes={{paper: classes.drawerPaper}}
       open={openMenu}
       onClose={handleOpenMenu}
      >
      {personalInfo.personalProfile.map((profile) =>(
        <List key={Math.random()} className={classes.listContainer}>
          <ListItem  className={classes.avatarStyle}>
          <Avatar
            alt="profile picture"
            variant="circular"
            src={pozaprf}
            className={classes.avatarLarge}
          />
          </ListItem>
          <ListItem >
          <ListItemText >
          <Typography
            display="block"
            variant="h4"
            align="center"
          >
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography
            display="block"
            variant="h6"
            gutterBottom
            align="center"
          >
            {profile.occupation}
          </Typography>
          </ListItemText>
          </ListItem>
          {menuItems.map((item) => (
            <ListItem button component={NavLink} to={item.path}
            onClick={handleOpenMenu}
            key={item.text}
            > 
            <ListItemIcon >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          ))  }
            <ListItem button>
              <ListItemIcon >
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={profile.email} />
            </ListItem>
            <ListItem button color='primary'>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={profile.phone} />
            </ListItem>
          <ListItem className={classes.socialMedia}  >
          <Box>
            <IconButton
              color="primary"
              href={profile.socialMediaLinks.linkedInUrl}
              target='_blank'
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" href={profile.socialMediaLinks.githubUrl} target='_blank'>
              <GitHubIcon />
            </IconButton>
            <ResumeBtn/>
          </Box>
          </ListItem>
      </List>
      ))}
      </Drawer>}
    </>
  );
};

export default MobileProfile;
