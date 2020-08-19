import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import { BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from './components/AppHeader';
import Info from './components/Info';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Search from './pages/Search/Search.js';
import BR from './pages/Extra/BR.js';
import News from './pages/Extra/News.js';
import NP from './pages/Extra/NP.js';
;

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <Info />
    <main className={classes.main}>
    <Router>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/Login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/search" exact component={Search} />
      <Route path="/News" exact component={News} />
      <Route path="/BR" exact component={BR} />
      <Route path="/NP" exact component={NP} />
      </>
    </Router>
    </main>
    <Footer />
    </Fragment>
   
);

export default withStyles(styles)(App);