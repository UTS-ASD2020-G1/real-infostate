import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';


const AppHeader = () => (
  <AppBar position="static" >
    <Toolbar title = "Real-InfoState" style={{background: '#222222'}}>
    <a href="/"><img src="./bannerlogo.jpg" alt="RI-Logo" height="70" width="200"/></a>
    &nbsp;&nbsp;&nbsp;
    <a href="/news"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>Buy / Rent</Button> </a>  
    <a href="/news"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>News</Button> </a>  
    <a href="/newproperty"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>New Property</Button> </a>  
    <a href="/search"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>Search</Button> </a>  
    </Toolbar>


    <div class="InfoBar" style={{background: '222222'}}>
   <a href="/register"><Button style={{background: '#FFFFFF', float: 'right',  margin: "10px"}}>Register</Button> </a>  
   <a href="/login"> <Button style={{background: '#FFFFFF', float: 'right',  margin: "10px"}}> Login </Button> </a>
   </div>
  </AppBar>
);

export default AppHeader;