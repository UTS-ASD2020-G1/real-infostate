// import React from 'react';
// import {
//   Typography,
//   makeStyles,
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Grid
// } from '@material-ui/core';
// import mockAgents from '/mockAgents.js';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     margin: 10
//   },
//   heading: {
//     marginLeft: 10
//   },
//   card: {
//     height: 300
//   }
// });

// const FindAgents = () => {

// const classes = useStyles();

// return(
//   <div id='agents'>
//     <Typography variant='h4' 
//       style={{
//       background: '/',
//       color: '/',
//       textAlign: 'center',  
//       margin: "10px auto"}}>
//       Agents
//       </Typography> 
//       <br></br>
//       <h1 className={classes.heading}>mockAgents</h1>
//       <Grid container direction="row">
//       {mockAgents.map(agents => { 
//         return(
//             <Card className={classes.root}>
//             <CardActionArea>
              
//               <CardContent className={classes.card}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {agents.name}
//                 </Typography>
//                 <Typography gutterBottom variant="subtitle2">
//                 By {agents.number}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                 {agents.email}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 Share
//               </Button>
//               <Button size="small" color="primary">
//                 Learn More
//               </Button>
//             </CardActions>
//           </Card>
//       ) 
//     }) 
//   }
//     </Grid>
//     </div>
//        )
//     }

// export default FindAgents;