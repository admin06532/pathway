import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/header';
import HomeContainer from './container/home';

import { CMS } from './components/cms/cms';

import { NotFound } from './components/404';
import { AboutUs } from './container/aboutUs/aboutUs';
import { Technology } from './container/technologies';
import ScrollToTop from './components/scrollTop/ScrolToTop'
import {ApiDev} from './components/api/ApiInt';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Ecommerce } from './components/eCommerce';
import { UsStaff } from './components/usStaff';
import { CustomerMgmt } from './components/customerMgmt';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {theme} from './theme';
import './common.css';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <ScrollToTop />
      <Header />
      <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <Form />
          </Route>
          <Route path="/pathapi">
            < ApiDev />
          </Route>
          <Route path="/cms">
            <CMS />
          </Route>
          <Route path="/ecommerce">
            <Ecommerce />
          </Route>
          <Route path="/customermanagement">
            <CustomerMgmt />
          </Route>
          <Route path="/usstaff">
            <UsStaff />
          </Route>
          <Route path="/tech">
            <Technology />
          </Route>
          <Route>
              <NotFound />
          </Route>
        </Switch>
      
      <Footer />
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
