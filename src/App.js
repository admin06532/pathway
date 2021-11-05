import {Header} from './components/header';
import HomeContainer from './container/home';

import {NotFound} from './components/404';


import { Footer } from './components/footer';
import { Form } from './components/form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const About = () => (<h1>About Us</h1>);
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
            <About />
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
