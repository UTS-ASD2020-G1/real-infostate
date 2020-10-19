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
  
const useStyles = makeStyles({
    button: {
      margin: 10
    }
});

const banneredit = (props) => {
  const [banner, setBanners] = useState('');

  useEffect(() => {
    axios
    .get(`http://localhost:3001/admin/banners/`)
    .then(response => {
      console.log('Banner is fetched successfully!')
      console.log(response.data)
      setBanners(response.data[0].banner)
    })
  )


  const updateBanner = (event) => {
    event.preventDefault()

    const updateBanner = {
      banner: banner,
    }

    axios
    .put(`http://localhost:3001/admin/banner/`, { banner: updateBanner } )
    .then(response => {
      console.log('Banner is updated successsfully')
      window.location='/admin/home'
    })
    .catch(error => {
      setMessage('Banner failed to be updated. Please try again.');
      setOpen(true)
    })
  }
  
  const classes = useStyles();  
  return (
      <form noValidate autoComplete="off">
        <div>
          <TextField 
          required 
          id="standard-required" 
          label="Banner" 
          defaultValue="None" 
          value={banner} 
          onChange={(event) => setBanners(event.target.value)}/>
          <br />
      <Button className={classes.button} variant="contained" color="primary" onClick={(event) => updateBanner(event)}>Save</Button>
      <Button className={classes.button} variant="contained" color="secondary" href={`/admin/home`}>Cancel</Button>
          <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Error</DialogTitle>
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
      </div>
      </form>
      );
}

export default banneredit;