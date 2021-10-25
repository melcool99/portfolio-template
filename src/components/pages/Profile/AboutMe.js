import { Box, Button, Zoom } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import React from 'react'
import { personalInfo } from '../../../assets/data/personalInfo'
import pozaprf from '../../../assets/images/pozaprf.jpg'
import ResumeBtn from '../../UI/ResumeBtn'
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({
  profileItems: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  contactInfo: {
    justifyContent: 'center',
  },

  footerStyle: {
    justifyContent: 'center',
  },

  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    
  },

  avatarMid: {
    width: theme.spacing(10),
    height: theme.spacing(10),

  },

  iconButton:{
    fonstSize:'0.2rem'
  },

  butonItem: {
    justifyContent: 'center',
  },
  box: {
    padding: '10px',
  },
}))

const AboutMe = ({isMobile}) => {
  const classes = useStyles()

  const onClickHandler = (e) => {
    const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
    const link = document.createElement('a')
    link.href = `${linkTo}:${e.target.innerText}`
    link.click()
  }

  return (
    <>
      {personalInfo.personalProfile.map((profile) => (
            <Zoom  in timeout={{enter:500, exit:500}}>
        <Box  key={Math.random()} className={classes.profileItems}>
            <ListItem className={classes.avatarInfo}>
              <Avatar
                alt='profile picture'
                variant='circular'
                src={pozaprf}
                className={isMobile ? classes.avatarMid : classes.avatarLarge}
              />
              <Typography variant={isMobile ? 'h5' : 'h4'}>
                {profile.firstName} {profile.lastName}
              </Typography>
              <Typography variant={isMobile ? 'h6' : 'h5'}>
                {profile.occupation}
              </Typography>
            </ListItem>
            <Box
              sx={{
                maxWidth: '80%',
                mt: 10,
                ml: 10,
                mr: 10,
                height:'100%'
              }}>
              <Typography align='center' variant={isMobile ? 'body1' : 'h5'}>
              Hi, I am a self-taught web developer from Bucharest, Romania, proficient in JavaScript, Typescript, React, HTML, CSS, and SQL.
              </Typography>
              <Typography align='center' variant={isMobile ? 'body1' : 'h5'}>
              Passionate about technology, innovation, and their role in the future. 
              </Typography>
              <Typography align='center' variant={isMobile ? 'body1' : 'h5'}>
              I like hanging out with friends, reading about tech, watching football, movies, playing video games and poker.
              </Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Box display='flex'>
                <Button size='small' onClick={onClickHandler}>
                  <PhoneIcon />
                  <Typography style={{ marginLeft: '5px', fontSize:isMobile &&'0.9rem' }}
                  
                  >
                    {profile.phone}
                  </Typography>
                </Button>
              </Box>
              <Box display='flex' alignItems='center'>
                <Button
                  size='small'
                  style={{ textTransform: 'lowercase' }}
                  onClick={onClickHandler}>
                  <EmailIcon />
                  <Typography style={{ marginLeft: '5px',fontSize:isMobile &&'0.9rem' }}>
                    {profile.email}
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box >
              <IconButton
                href={profile.socialMediaLinks.githubUrl}
                target='_blank'>
                <GitHubIcon color='primary' />
              </IconButton>
              <IconButton
                href={profile.socialMediaLinks.linkedInUrl}
                target='_blank'>
                <LinkedInIcon color='primary' />
              </IconButton>
            </Box>
            <ListItem className={classes.butonItem}>
              <ResumeBtn />
            </ListItem>
            <ListItem className={classes.footerStyle}>
              <Footer />
            </ListItem>
          </Box>
        </Zoom>
      ))}
    </>
  )
}

export default AboutMe
