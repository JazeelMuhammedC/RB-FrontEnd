import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '14px' }}>
                © {new Date().getFullYear()} Jazeel. All rights reserved.
              </Link>

            </Typography>


          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Footer