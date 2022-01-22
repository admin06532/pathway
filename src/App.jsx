import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from './components/header';
import HomeContainer from './container/home';
import UsStaffing from './container/usStaffing';
import OutSource from './container/outSourcing';
import Contract from './container/CPR';
import Permanent from './container/PPR';
import { NotFound } from './components/404';
import { AboutUs } from './container/aboutUs/aboutUs';
import { Technology } from './container/technologies';
import ScrollToTop from './components/scrollTop/ScrolToTop'
import {ApiDev} from './components/api/ApiInt';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Ecommerce } from './components/eCommerce';
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
          <Route path="/usStaffing">
            <UsStaffing />
          </Route>
          <Route path="/contactUs">
            <Form />
          </Route>
          <Route path="/pathapi">
            < ApiDev />
          </Route>
          <Route path="/permanent">
            <Permanent />
          </Route>
          <Route path="/ecommerce">
            <Ecommerce />
          </Route>
          <Route path="/customermanagement">
            <CustomerMgmt />
          </Route>
          <Route path="/outsource">
            <OutSource />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          
          

          <Route path="/technology">
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
