import React from 'react';

import {
  Typography,
  withStyles,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10
  },
  heading: {
    marginLeft: 10
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
      <h1 className={classes.heading}>Latest Property News</h1>
      <Grid container direction="row">
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news1.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          NSW Government changes stamp duty rules for first-home buyers to prop up economy
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Matt Bell
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The NSW Government has announced stamp duty will be temporarily scrapped for first-home buyers purchasing newly-built properties worth up to $800,000 and heavily discounted for homes priced up to $1 million.
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news2.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HomeBuilder grants: 1100 Victorians apply in a week
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Nathan Mawby
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          More than 1100 Victorians have applied for the $25,000 HomeBuilder grants in the past week. Despite the rapid uptake, even with Melbourne under a stage four lockdown, industry groups are warning they will need an extension of the federal government’s $680m scheme to avert a builder “bloodbath” as a result of COVID-19.          </Typography>
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news3.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Film director George Miller buys Upper Kangaroo River ­retreat of INXS guitarist Tim Farriss          
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Jonathan Chancellor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Film director George Miller and his wife Margaret Sixel have emerged as the $4.35 million buyers of Willabrook, the Upper Kangaroo River ­retreat of INXS guitarist Tim Farriss and wife Beth.
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
    <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news4.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Holiday at home in your very own suburban resort
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Janelle Estreich
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This extraordinary suburban estate, set over three blocks, offers all of the luxury features you’d expect to find in a first-class resort. Lush tropical gardens surround the sprawling 2372 sqm Sorrento site, which was inspired by Caribbean island living. That holiday vibe kicks off with not one, but two pools — an 18m heated lap pool for exercise and a large leisure pool just for fun.
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
    <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news5.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Where to bag a bargain before vendor discounts dry up
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Samantha Healy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Buyers looking to secure a bargain should look no further than Townsville, with sellers offering the biggest vendor discounts in Australia’s regional markets. CoreLogic’s latest quarterly regional review, which analyses 25 of Australia’s largest non-capital city markets, found that Townsville sellers were, on average, offering a discount rate of 5.9 per cent to secure a sale on their house.          </Typography>
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
    <Card className={classes.root}>
    <CardActionArea>
        <CardMedia
          component="img"
          alt="Real Estate"
          height="140"
          image={require("../images/news6.jpeg")}
          title="Real Estate"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          This Sandy Bay home is in a class of its own
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          By Jarrad Bevan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ASTONISHING, awe-inspiring, remarkable … there are a bunch of words that spring to mind when visiting this large family property in one of Tassie’s finest suburbs. No.46 Maning Avenue, Sandy Bay is perched at the top of its street on a block of land that near boggles the mind. Charlotte Peterswald for Property director Kim Morgan says it is one of the last properties in the avenue and it stretches out across 2700sq m of land.          
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
    </Grid>
    </div>
       )
    }

export default Info;