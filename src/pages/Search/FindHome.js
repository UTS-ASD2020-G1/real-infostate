import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Typography,
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
});


const Search = () => {
  const [suburb, setSuburb] = useState('');
  const [suburbs, setSuburbs] = useState([]);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [searchedSuburbs, setSearchedSuburbs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/suburb/')
    .then(response => {
      console.log(response.data)
      let sortedSuburbs = response.data.sort((obj1, obj2) => obj1["name"] < obj2["name"] ? -1 : 1)
      setSearchedSuburbs(sortedSuburbs)
      setSuburbs(sortedSuburbs)
    })
    .catch(error => {
      console.log(error);
      setMessage("Failed to get all suburbs. Please try again later.")
    })
  }, [])

  const searchSuburb = () => {
    let searchedSuburb = [];

    if (searchText){
      const searchTextLowerCase = (searchText || "").toLowerCase();
    
      suburbs.map((suburb,i)=>{
        if ( suburb.name && suburb.name.toLowerCase().includes(searchTextLowerCase)){
          searchedSuburb.push(suburb);
        }
      });
      
      if (searchedSuburb.length < 1){
        setMessage("There is no suburb found in the record.")
        setOpen(true)
      } else {
        setSearchedSuburbs(searchedSuburb);
        setSearchText(searchText)
      }
    } else { 
      setSearchedSuburbs(suburbs)
    }
  };

  const classes = useStyles();  

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
            onChange={(event) => { setSearchText(event.target.value) }}
            value={searchText}
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
      <>
      {
          searchedSuburbs.map(suburb => (
            <ListItem>
              <ListItemText
                 primary={suburb.name}
                 secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {suburb.description}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Average Property Cost: &nbsp;
                     {suburb.averagePropertyCost}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Transport rate: &nbsp;
                     {suburb.transportRate}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Satisfaction rate: &nbsp;
                     {suburb.satisfactionRate}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Parking rate: &nbsp;
                     {suburb.parkingRate}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Crime rate: &nbsp;
                     {suburb.crimeRate}
                </Typography>
                <br />
                <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      ATAR Average: &nbsp;
                     {suburb.atarAverage}
                </Typography>
                <br />
              </React.Fragment>
           } />
        </ListItem>
          ))
          }
      </>
    </div>
  );
}

export default Search;