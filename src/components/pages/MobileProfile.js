import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

import { menuItems } from './NavBar'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '50%',
    backgroundColor: 'rgba(122, 111, 92, 0.5)',
    backdropFilter: 'blur(20px) saturate(180%)',
  },

  navItemsSelectedDark: {
    color: '#e65100',
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    '& .MuiListItemIcon-root': {
      color: '#e65100',
    },
    '&:hover': {
      color: 'white',
    },
  },
}))

const MobileProfile = ({ open, handleOpenMenu, isMobile }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>
      {isMobile && (
        <Drawer
          variant='temporary'
          anchor='left'
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          open={open}
          onClose={handleOpenMenu}>
          <Box>
            {menuItems.map((item) => (
              <ListItem
                button
                component={NavLink}
                to={item.path}
                onClick={handleOpenMenu}
                key={item.text}
                selected={item.path === location.pathname}
                classes={{ selected: classes.navItemsSelectedDark }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>
                  <Typography style={{ fontWeight: 700 }}>
                    {item.text}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </Box>
        </Drawer>
      )}
    </>
  )
}

export default MobileProfile
