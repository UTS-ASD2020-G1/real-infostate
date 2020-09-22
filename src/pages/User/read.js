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

  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios
    .get(`http://localhost:3001/users/read`)
    .then(response => {
      console.log('Yeet users are fetched!')
      console.log(response.data)
      setUsers(response.data)
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
    users.map(user => (
      
      <div>
        </div>
    ))
  );
}



export default Read;

  