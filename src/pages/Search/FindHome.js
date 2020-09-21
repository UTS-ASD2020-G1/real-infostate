import React, { useState } from 'react';
import {
  Typography,
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';


const Search = () => {

  const [suburb, setSuburb] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false)

  const searchSuburb = () => { // temporary
    if (suburb === '') {
      setMessage("Please enter a Suburb Name/Post Code")
      setOpen(true)
    }
    else {
      setMessage("//TODO: needs to verify if suburb exists")
      setOpen(true)
    }
  };

  return (
    <div className="App">
      <Typography variant='h4'
        style={{
          background: '/',
          color: '/',
          textAlign: 'center',
          margin: "10px auto"
        }}>
        Find a Home
      </Typography>
      <header className="App-header">
        <h2>Find a Home</h2>
        <div className="Search">

          <TextField
            required
            style={{ margin: 8 }}
            id="outlined-helperText"
            label="Suburb Name"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(event) => { setSuburb(event.target.value) }}
            value={suburb}
          />&nbsp;&nbsp;&nbsp;

            <TextField
            required
            style={{ margin: 8 }}
            id="outlined-helperText"
            label="Post Code"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={(event) => { setSuburb(event.target.value) }}
            value={suburb}
          />&nbsp;&nbsp;&nbsp;

                <div className="Button">
            <Button  style={{
    background: '/',  color: "/",
    textAlign: 'right',  margin: " auto"}}
              variant="contained"
              color="primary"
              onClick={() => {
                searchSuburb();
              }}
            >
              Search
                  </Button>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Search Output Fail</DialogTitle>
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

export default Search;