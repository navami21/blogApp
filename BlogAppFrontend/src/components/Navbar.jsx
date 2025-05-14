import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#5F99AE'}}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog-App
          </Typography>
         
        <Link to={"/blog"}> < Button sx={{ color: 'white',fontWeight:'600',fontSize:'16px' }}>Blog</Button></Link>
        <Link to={"/addblog"}> < Button sx={{ color: 'white',fontWeight:'600',fontSize:'16px' }}>ADD Blog</Button></Link>
        <Link to={"/"}> < Button sx={{ color: 'white',fontWeight:'600',fontSize:'16px' }} onClick={()=>{
          localStorage.removeItem('logintoken');
        }}>Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default Navbar