import React, { useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  Typography,
} from '@material-ui/core';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [suburb, setSuburb] = useState('');
    const [postCode, setPostCode] = useState('');
    const [state, setState] = 'New South Wales';
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)

      const signUp = () => { // temporary
        if(username === ''){
          setMessage("Registration Failed, Complete All Required Fields")
          setOpen(true)
        }
        else{
          setMessage("Your account has been registered!")
          setOpen(true)
        }
      };

        return (
          <div className="App">
            <header className="App-header">
            <Typography variant="h5">Real-InfoState Register:</Typography>
              <div className="Register">
              <TextField
                  required
                  style={{margin:8}}
                  id="outlined-helperText"
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(event) => {setfirstname(event.target.value)}}
                  value={firstname}
                />&nbsp;&nbsp;&nbsp;

                <TextField
                  required
                  style={{margin:8}}
                  id="outlined-helperText"
                  label="Last Name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(event) => {setlastname(event.target.value)}}
                  value={lastname}
                />&nbsp;&nbsp;&nbsp;

                <TextField
                  required
                  style={{margin:8}}
                  id="outlined-helperText"
                  label="Username"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  onChange={(event) => {setUsername(event.target.value)}}
                  value={username}
                /> &nbsp;&nbsp;&nbsp;

                <br></br>

                <TextField
                //Password
                required
                style={{margin:8}}
                id="outlined-helperText"
                label="Password"
                type="password"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                onChange={(event) => {setPassword(event.target.value)}}
                value={password}
                />

                <br></br>

                <TextField
                //Email Address
                required
                style={{margin:8}}
                id="outlined-helperText"
                label="Email Address"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                onChange={(event) => {setEmail(event.target.value)}}
                value={email}
                />

                <br></br>

                <TextField
                //Street Addres line 1
                required
                style={{margin:8}}
                id="outlined-helperText"
                label="Street Addres line 1"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                onChange={(event) => {setAddressLine1(event.target.value)}}
                value={addressLine1}
                />

                <TextField
                //Street Address line 2
                style={{margin:8}}
                id="outlined-helperText"
                label="Street Addres line 2"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                onChange={(event) => {setAddressLine2(event.target.value)}}
                value={addressLine2}
                />

                <br></br>

                <TextField
                //Suburb
                required
                style={{margin:8}}
                id="outlined-helperText"
                helperText=""
                label="Suburb"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(event) => {setSuburb(event.target.value)}}
                value={suburb}
                />

                <TextField
                //Post Code
                required
                style={{margin:8}}
                id="outlined-helperText"
                helperText=""
                label="Post Code"
                variant="outlined"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(event) => {setPostCode(event.target.value)}}
                value={postCode}
                />

                <TextField
                //State (NSW)
                disabled
                style={{margin:8}}
                id="filled-read-only-input"
                label="State"
                defaultValue="New South Wales"
                InputLabelProps={{
                  "readonly": true,
                }}
                variant="filled"
                />

                <div className="Button">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      signUp();
                    }}
                  >
                    Register
                  </Button>
                </div>
              </div>
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">Register</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)} color="primary">
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
            </header>
          </div>
        );
}

export default Register;