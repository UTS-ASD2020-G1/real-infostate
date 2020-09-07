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

const Home = () => {
  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    axios
    .get(`http://localhost:3001/admin/users`)
    .then(response => {
      console.log('Yeet users are fetched!')
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])

  const deleteUser = (event, user) => {
    event.preventDefault();

    axios
    .delete(`http://localhost:3001/admin/users/${user.id}`)
    .then(response => {
      console.log('User is deleted successfully')
      window.location = '/admin/home'
    })
    .catch(error => {
      console.log("Something Wrong")
    })
  }

    const classes = useStyles();  

        return (
          <>
          {/* Searchbar */}
          {/* List */}
          {
            users.map(user => (
            <ListItem>
              <ListItemText
                 primary={user.username}
                 secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {user.firstName} {user.lastName ? user.lastName : ''}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {user.email}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {user.address ? user.address : "No Address found"}
                </Typography>
              </React.Fragment>
                }
              />
                <Button variant="contained" color="primary" href={`/admin/user/edit/${user.id}`}>
                    Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={(event) => deleteUser(event, user)}>
                  Delete
                </Button>
              </ListItem>
            ))
          }
      </>
        );
}

export default Home;