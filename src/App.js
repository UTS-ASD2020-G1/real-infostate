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
import Logout from './pages/Logout';
import Register from './pages/Register/Register.js';
import FindHome from './pages/Search/FindHome.js';
import Agent from './pages/Search/Agent.js';
import News from './pages/Extra/News.js';
import NP from './pages/Extra/NP.js';
import AdminLogin from './pages/Admin/login.js';
import AdminHome from './pages/Admin/home.js';
import AdminEdit from './pages/Admin/edit.js';

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
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/register" exact component={Register} />
      <Route path="/FindHome" exact component={FindHome} />
      <Route path="/News" exact component={News} />
      <Route path="/Agent" exact component={Agent} />
      <Route path="/NP" exact component={NP} />
      {/* Admin */}
      <Route path="/admin/login" exact component={AdminLogin} />
      <Route path="/admin/home" exact component={AdminHome} />
      <Route path="/admin/user/edit/:id" exact component={AdminEdit} />
      </>
    </Router>
    </main>
    <Footer />
  </Fragment>
);

export default withStyles(styles)(App);