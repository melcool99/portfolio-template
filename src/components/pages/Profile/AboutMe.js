import { Box, Button, Grid, Zoom } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rootItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    marginTop:'2rem'
  },

  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  avatarMid: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const AboutMe = ({ isMobile }) => {
  const classes = useStyles()

  const onClickHandler = (e) => {
    const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
    const link = document.createElement('a')
    link.href = `${linkTo}:${e.target.innerText}`
    link.click()
  }

  return (
    <>
      <Zoom in timeout={{ enter: 500, exit: 500 }}>
      <div>
        {personalInfo.personalProfile.map((profile) => (
          <Grid container key={Math.random()} className={classes.root}>
            <Grid item className={classes.rootItems}>
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
              <Box sx={{mt:10,mb:10, width:'80%'}}>
              <Typography align='center' variant={isMobile ? 'body1' : 'h6'}>
                Hi, I am a self-taught web developer from Bucharest, Romania,
                proficient in JavaScript, Typescript, React, HTML, CSS, and SQL.
              </Typography>
              <Typography align='center' variant={isMobile ? 'body1' : 'h6'}>
                Passionate about technology, innovation, and their role in the
                future.
              </Typography>
              <Typography align='center' variant={isMobile ? 'body1' : 'h6'}>
                I like hanging out with friends, reading about tech, watching
                football, movies, playing video games and poker.
              </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display='flex'>
                <Button size='small' onClick={onClickHandler}>
                  <PhoneIcon />
                  <Typography
                    style={{
                      marginLeft: '5px',
                      fontSize: isMobile && '0.9rem',
                    }}>
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
                  <Typography
                    style={{
                      marginLeft: '5px',
                      fontSize: isMobile && '0.9rem',
                    }}>
                    {profile.email}
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item>
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
              <Box  sx={{mb:10}}>
                <ResumeBtn />
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
      </Zoom>
    </>
  )
}

export default AboutMe
