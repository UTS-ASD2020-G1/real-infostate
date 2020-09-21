import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import store from "../store/index";
import { setUser } from "../store/actions/index";

window.store = store;
window.setUser = setUser;

const AppHeader = () => {
  console.log(store.getState())
  return(
    <AppBar position="static" >
    <Toolbar title = "Real-InfoState" style={{background: '#222222'}}>
    <a href="/"><img src="./michelle-logo.png" alt="RI-Logo" height="70" width="200"/></a>
    &nbsp;&nbsp;&nbsp;
    <a href="/FindHome"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>Find a Home</Button> </a>  
    <a href="/Agent"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>Find an Agent</Button> </a>  
    <a href="/news"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>News</Button> </a>  
    <a href="/NP"><Button style={{color: '#FFFFFF', margin: "10px", padding: "10px", fontWeight:"bold" }}>New Property</Button> </a>  
    </Toolbar>

    <div class="InfoBar" style={{background: '222222'}}>
  { store.getState().user ? <a href="/register"><Button style={{background: '#FFFFFF', float: 'right',  margin: "10px"}}>Register</Button> </a> : <></> } 
  { store.getState().user ?  <a href="/login"> <Button style={{background: '#FFFFFF', float: 'right',  margin: "10px"}}> Login </Button> </a> : <></> } 
  { !store.getState().user ?  <a href="/logout"> <Button style={{background: '#FFFFFF', float: 'right',  margin: "10px"}}> Logout </Button> </a> : <></> } 
   </div>
   
  </AppBar>
  )
};

export default AppHeader;