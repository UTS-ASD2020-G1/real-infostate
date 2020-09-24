import React from 'react';

import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid
} from '@material-ui/core';

import homestuff from "../data/homestuff";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 50
  },
  heading: {
    marginLeft: 10
  },
  card: {
    height: 200
  }
});

const Info = () => {

const classes = useStyles();

return(
  <div id='home'>
    <Typography variant='h4' 
      style={{
      background: '/',
      color: '/',
      textAlign: 'center',  
      margin: "10px auto"}}>
      Welcome to Real InfoState.
      </Typography> 
      <br></br>
      <Grid container direction="row">
      { homestuff.map(home => { 
        return(
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="home"
                height="250"
                image={require(`../agentImages/${home.image}.jpg`)}
                title="home"
              />
              <CardContent className={classes.card}>
                <Typography gutterBottom variant="h5" component="h2">
                  {home.name}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                 {home.type}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {home.stuff}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick="window.location='/Agent.js'" size="small" color="primary">
                Check Out
              </Button>
           
            </CardActions>
          </Card>
      ) 
    }) 
  }
    </Grid>
    </div>
       )
    }

export default Info;