import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage'; 
import routes from './routes';

const Routes = () => {
return (
 <Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/directors" component={Directors} />
    <Route path="/actors" component={Actors} />
    <Route path="/movie/:id" component={Movie} />
    <Route component={ErrorPage} />
   </Switch>
  </Router>
  );
}

export default Routes;