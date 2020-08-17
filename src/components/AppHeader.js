import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Real-InfoState, the place for your dream suite.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;