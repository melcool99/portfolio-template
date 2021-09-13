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
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ResumeBtn from "../../UI/ResumeBtn";
import { personalInfo } from "../../data/personalInfo";
import { menuItems } from "../NavBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";


const useStyles = makeStyles((theme) => ({
 
  drawer: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "100%",
    backgroundColor: "rgba(122, 111, 92, 0.5)",
    backdropFilter: "blur(20px) saturate(180%)",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  navItems:{
    display: "flex", 
    flexDirection: "column",
    
  },

  socialMediaLinks:{
    justifyContent:'center',
  },

  avatarLarge: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    
  },

  navItemsSelectedDark: {
    color: "#e65100",
    // "&.active": {
    //   backgroundColor: "rgba(0, 0, 0, 0)",
    // },
    "& .MuiListItemIcon-root": {
      color: "#e65100",
    },
    "&:hover": {
      color: "white",
    },
  },

 
}));

const MobileProfile = ({ open, handleOpenMenu, isMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  
  const onClickHandler = (e) => {
    const link = document.createElement("a");
    const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
    link.href = `${linkTo}:${e.target.innerText}`;
    link.click();
   }

  return (
    <>
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          open={open}
          onClose={handleOpenMenu}
        >
          {personalInfo.personalProfile.map((profile) => (
          <List key={Math.random()} className={classes.listContainer}>
              <ListItem className={classes.navItems}>
                <Avatar
                  alt="profile picture"
                  variant="circular"
                  src={pozaprf}
                  className={classes.avatarLarge}
                />
                <ListItemText>
                  <Typography variant="h4" style={{fontWeight:700}} >
                    {profile.firstName} {profile.lastName}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="h6"  style={{fontWeight:700}}>
                    {profile.occupation}
                  </Typography>
                </ListItemText>
              </ListItem>
               <Box>
                 {menuItems.map((item) => (
                   <ListItem 
                   button
                   component={NavLink}
                    to={item.path}
                    onClick={handleOpenMenu}
                    key={item.text}
                    selected = {item.path === location.pathname}
                    classes= {{selected:classes.navItemsSelectedDark}}
                    
                    >
                      
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                     <ListItemText>
                       <Typography style={{fontWeight:700}}>
                         {item.text}
                       </Typography>
                     </ListItemText>
                   </ListItem>
                 ))}
                 <ListItem button 
                  onClick={onClickHandler}
                   >
                  <ListItemIcon >
                    <EmailIcon />
                  </ListItemIcon>
                  <Typography style={{fontWeight:500}}>{profile.email}</Typography>
                  </ListItem>
                  <ListItem button 
                  onClick={onClickHandler}>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <Typography style={{fontWeight:500}}>{profile.phone}</Typography>
                  </ListItem>
                  <ListItem className={classes.socialMediaLinks} >
                    <IconButton
                      color="primary"
                      href={profile.socialMediaLinks.linkedInUrl}
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={profile.socialMediaLinks.githubUrl}
                      target="_blank"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </ListItem>
                    <ListItem  className={classes.socialMediaLinks}>
                    <ResumeBtn />
                    </ListItem>
               </Box>
             </List>))}
         
        </Drawer>
      )}
    </>
  );
};

export default MobileProfile;