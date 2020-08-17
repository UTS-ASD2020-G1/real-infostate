import React, { useState } from "react";
import React from 'react';
import Button from '@material-ui/core/button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName]  = useState('');
    const [lastname, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [address, setAddress] = useState('');
    const [open, setOpen] = useState(false);

    const SignUp = () => {
        //TODO Implement SignUp Logic
        setMessage("Your Account has been created");
        setOpen(true);
    };

    return(
            <div className ='App'>
                <header className='App-header'>
                <div className = 'Register'>
                    <TextField
                    hintText="Create a Username"
                    floatingLabelText="Username"
                    type="text"
                    onChange={(event, value) => setUsername(value)}
                    required/>
                    <TextField
                    hintText="Enter your email address"
                    floatingLabelText="Email Address"
                    type="email"
                    onChange={(event, value) => setEmail(value)}
                    required/>
                    <TextField
                    hintText="Your First Name"
                    floatingLabelText="First Name"
                    type="text"
                    onChange={(event, value) => setFirstName(value)}
                    required/>
                    <TextField
                    hintText="Your Last Name"
                    floatingLabelText="Last Name"
                    type="text"
                    onChange={(event, value) => setLastName(value)}
                    required/>
                    <TextField
                    hintText="Your Address"
                    floatingLabelText="Address"
                    type="text"
                    onChange={(event, value) => setAddress(value)}
                    required/>
                </div>

                <div className="Button">
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => SignUp()}
                    />
                </div>
                </header>
            </div>
    );
}

export default Register;

