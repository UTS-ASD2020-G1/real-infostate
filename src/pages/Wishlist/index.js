import React, { useState, useEffect } from 'react';
import {
  makeStyles
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from 'axios';
import { selectFields } from 'express-validator/src/select-fields';

const Wishlist = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('') // error message
    const [open, setOpen] = useState(false) // open prompt
    const [user, setUser] = useState({}); // current logged in user  

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedInUser')
      if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON);
          setUser(user);
          axios
          .get(`http://localhost:3001/users/${user.id}`)
          .then(response => {
            console.log('User are fetched successfully!')
            console.log(response.data)
            setFirstName(response.data[0].firstName)
            setLastName(response.data[0].lastName)
            setEmail(response.data[0].email)
            setUsername(response.data[0].username)
            setAddress(response.data[0].address)
          })     
      }
  }, [])

return (
  <div>
    <h1>{username}'s Wishlist</h1>
  </div>
);
}


export default Wishlist;