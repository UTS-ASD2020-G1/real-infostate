import React, { useState, useEffect } from 'react';
import {
  makeStyles
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
  
const useStyles = makeStyles({
    // root: {
    //     '& .MuiTextField-root': {
    //       margin: theme.spacing(1),
    //       width: '25ch',
    //     },
    // }
});

const Edit = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios
    .get(`http://localhost:3001/users/read`)
    .then(response => {
      console.log('Yeet user are fetched!')
      console.log(response.data)
      setFirstName(response.data[0].firstName)
      setLastName(response.data[0].lastName)
      setEmail(response.data[0].email)
      setUsername(response.data[0].username)
      setAddress(response.data[0].address)
    })
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const updateUser = (event) => {
      event.preventDefault()
    const updateUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          username: username,
          address: address
      }

    axios
    .put(`http://localhost:3001/users/update/${props.match.params.id}`, { user: updateUser })
    .then(response => {
      console.log('User are updated successsfully')
      window.location='/user/edit'
    })
  }

    const classes = useStyles();  

        return (
            <form noValidate autoComplete="off">
            <div>
            <TextField 
            required 
            id="standard-required" 
            label="First name" 
            defaultValue="None" 
            value={firstName} 
            onChange={(event) => setFirstName(event.target.value)}/>
            <br />
            <TextField 
            required 
            id="standard" 
            label="Last name"
            defaultValue="None" 
            value={lastName} 
            onChange={(event) => setLastName(event.target.value)} />
            <br />
            <TextField 
            required 
            id="standard-required" 
            label="Email" 
            defaultValue="None" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />
            <br />
            <TextField 
            required 
            id="standard-required" 
            label="Username" 
            defaultValue="None" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} />
            <br />
            <TextField 
            required 
            id="standard" 
            label="Address" 
            defaultValue="None" 
            value={address}
            onChange={(event) => setAddress(event.target.value)} />
            <br />
            <Button variant="contained" color="primary" onClick={(event) => updateUser(event)}>
               Save
             </Button>
             <Button variant="contained" color="secondary" href={`/users/read`}>
               Cancel
            </Button>
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    User is updated successfully!
                </Alert>
              </Snackbar> */}
            </div>
            </form>
        );
}

export default Edit;