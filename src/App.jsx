import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {HeaderRoute} from "./components/header";
import HomeContainer from "./container/home";
import UsStaffing from "./container/usStaffing";
import OutSource from "./container/outSourcing";
import Contract from "./container/CPR";
import Permanent from "./container/PPR";
import Whypathway from "./container/whyPathway";

import {NotFound} from "./components/404";
import {AboutUs} from "./container/aboutUs/aboutUs";
import {Technology} from "./container/technologies";
import ScrollToTop from "./components/scrollTop/ScrolToTop";
import RouteSpecificScroll from "./components/scrollTop/RouteSpecificScroll";

import {ApiDev} from "./components/api/ApiInt";
import {Footer} from "./components/footer";
import {Form} from "./components/form";
import {Ecommerce} from "./components/eCommerce";
import {CustomerMgmt} from "./components/customerMgmt";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {theme} from "./theme";
import "./common.css";

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <RouteSpecificScroll />
          <HeaderRoute />
            <Switch>
              <Route exact path='/'>
                <HomeContainer />
              </Route>
              <Route path='/about'>
                <AboutUs />
              </Route>
              <Route path='/usStaffing'>
                <UsStaffing />
              </Route>
              <Route path='/contactUs'>
                <Form />
              </Route>
              <Route path='/pathapi'>
                <ApiDev />
              </Route>
              <Route path='/permanent'>
                <Permanent />
              </Route>
              <Route path='/ecommerce'>
                <Ecommerce />
              </Route>
              <Route path='/customermanagement'>
                <CustomerMgmt />
              </Route>
              <Route path='/outsource'>
                <OutSource />
              </Route>
              <Route path='/contract'>
                <Contract />
              </Route>
              <Route path='/technology'>
                <Technology />
              </Route>
              <Route path='/whypathway'>
                <Whypathway />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
            <Footer />
            <ScrollToTop />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
