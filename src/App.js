import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import { BrowserRouter as Router, Route} from "react-router-dom";
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Search from './pages/Search/Search.js';

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
    <main className={classes.main}>
    <Router>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/Login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/search" exact component={Search} />
      </>
    </Router>
    </main>
    </Fragment>
);

export default withStyles(styles)(App);