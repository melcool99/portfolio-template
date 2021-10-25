import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div style={{display:'flex', justifyContent:'center',maxWidth:'400', alignItems:'center'}}>
      <Typography color='error' variant='h4'>
        Oops! That page can’t be found.
        <Link to='/'>  <Typography variant='h6' color='error' align='center'>About Me</Typography> </Link>
        <Link to='/resume'>  <Typography variant='h6' color='error' align='center'>Resume</Typography> </Link>
        <Link to='/portfolio'>  <Typography variant='h6' color='error' align='center'>Portfolio</Typography> </Link>
      </Typography>
      
    </div>
  )
}

export default PageNotFound
