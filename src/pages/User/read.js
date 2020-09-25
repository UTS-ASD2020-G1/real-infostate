import React, { useState, useEffect } from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
});

const Read = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('') 
  const [open, setOpen] = useState(false) 
  
  useEffect(() => {
    axios
    .get(`http://localhost:3001/users/read`)
    .then(response => {
      console.log('Yeet users are fetched!')
      console.log(response.data)
      setFirstName(response.data[0].firstName)
      setLastName(response.data[0].lastName)
      setEmail(response.data[0].email)
      setUsername(response.data[0].username)
      setAddress(response.data[0].address)
    })
  }, [])

  const deleteUser = (event, user) => {
    event.preventDefault();

    axios
    .delete(`http://localhost:3001/users/delete`)
    .then(response => {
      console.log('User is deleted successfully')
      window.location = '/user/read'
    })
    .catch(error => {
      console.log("Something Wrong")
    })
  }

  const classes = useStyles();  

  return (
      <div>
        <h1>User data shown below</h1>
        <table>
        <tr><td>Username: {username}</td></tr>
        <tr><td>Last Name: {lastName}</td></tr>
        <tr><td>First Name: {firstName}</td></tr>
        <tr><td>Email: {email}</td></tr>
        <tr><td>Address: {address}</td></tr>
        </table>
        <Button className={classes.button} variant="contained" color="primary" href={`/user/edit`}>Edit</Button>
        </div>
  );
}



export default Read;

  