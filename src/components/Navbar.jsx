import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  // justifyContent: 'space-between',
});

export default function Navbar() {
  return (
    <AppBar position='sticky' sx={{ bgcolor: 'white' }}>
      <StyledToolBar>
        <IconButton
          size='large'
          edge='start'
          // color="inherit"
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography p={2} color={'black'}>
          DENA
        </Typography>
      </StyledToolBar>
    </AppBar>
  );
}
