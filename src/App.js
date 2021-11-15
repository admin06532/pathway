import { Header } from './components/header';
import HomeContainer from './container/home';

import { NotFound } from './components/404';
import { AboutUs } from './container/aboutUs/aboutUs';


import { Footer } from './components/footer';
import { Form } from './components/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Dashboard = () => (<h1>Dashboard Page</h1>);


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/contactUs">
            <Form />
          </Route>
          <Route>
              <NotFound />
          </Route>
        </Switch>
      
      <Footer />
    </Router>
    </div>
  );
}

export default App;
