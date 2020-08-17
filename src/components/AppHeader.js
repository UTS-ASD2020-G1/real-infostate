import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  flex:{
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <AppBar position="static" >
    <Toolbar title = "Real-InfoState" style={{background: '#222222'}}>
    <a href="/"><img src="./bannerlogo.jpg" alt="RI-Logo" height="70" width="200" /></a>
    &nbsp;&nbsp;&nbsp;
    <a href="/login"> <Button style={{background: '#FFFFFF', float: 'right'}}> Login </Button> </a> &nbsp;&nbsp;&nbsp;
    <a href="/register"><Button style={{background: '#FFFFFF', float: 'right'}}>Register</Button> </a>  &nbsp;&nbsp;&nbsp;
    <a href="/search"><Button style={{background: '#FFFFFF', float: 'right'}}>Search</Button> </a>  &nbsp;&nbsp;&nbsp;
    </Toolbar>
  </AppBar>
);

export default AppHeader;