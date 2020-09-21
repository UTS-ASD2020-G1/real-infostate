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

import mockProperty from "../data/mockProperty";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 10
  },
  heading: {
    marginLeft: 10
  },
  card: {
    height: 500
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
     New Property
      </Typography> 
      <br></br>
      <h1 className={classes.heading}>Property</h1>
      <Grid container direction="row">
      { mockProperty.map(property => { 
        return(
            <Card className={classes.root}>
            <CardActionArea>
              <CardContent className={classes.card}>
                <Typography gutterBottom variant="h5" component="h2">
                 Hosted by {property.name}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                 {property.description}
                <Typography variant="body2" color="textSecondary" component="p">
                Located in: {property.address}
                </Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               Price: $ {property.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               Size(Sqm): {property.size}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               Property Type: {property.size}
                </Typography>
                
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
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