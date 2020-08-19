import React from 'react';

import {
  Typography,
  withStyles,
} from '@material-ui/core';


const Info = () => (
  <div id='home'><Typography variant='h4' style={{
    background: '/',  color: '/',
    textAlign: 'center',  margin: "10px auto"}}>
      Welcome to Real InfoState.</Typography> 
      <br></br>
      <h1>Latest Property News</h1>
      <div class='photostack' style={{margin:"10px 10px", padding:"10px"}}>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      <img src="./house1.jpg" alt="RI-Logo" height="300" width="300"/>
      </div>
      </div>

    );


export default Info;