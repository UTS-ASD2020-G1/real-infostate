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
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
    backgroundColor: "#ffffff",
},
  Appheader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "white"
},
   Login: {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center", 
     padding: "50px"
},
     Button: {
    padding: "40px"
}
});

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)

    const classes = useStyles();

      const signIn = () => { // temporary 
        if (username === "react" && password === "password") {
          setMessage("You have successfully Logged In!")
          setOpen(true)
        } else {
          setMessage("Incorrect Username or Password!")
          setOpen(true)
        }
      };

        return (
          <div className={classes.App}>
            <Typography variant="h5">Real-InfoState Login:</Typography>
            <header className={classes.Appheader}>
              <div className={classes.Login}>
                <TextField
                  variant="standard"
                  placeholder="Username"
                  margin="normal"
                  required
                  onChange={(event) => {setUsername(event.target.value)}}
                  value={username}
                /> &nbsp;&nbsp;&nbsp;
                <TextField
                  variant="standard"
                  placeholder="Password"
                  margin="normal"
                  required
                  type="password"
                  onChange={(event) => {setPassword(event.target.value)}}
                  value={password}
                />
    
                <div className={classes.Button}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      signIn();
                    }}
                  >
                    Log In
                  </Button>
                </div>
              </div>
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
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

export default Login;