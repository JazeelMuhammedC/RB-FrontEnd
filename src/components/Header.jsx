import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaSheetPlastic } from "react-icons/fa6";

function Header() {
  return (
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
          <FaSheetPlastic />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default Header;