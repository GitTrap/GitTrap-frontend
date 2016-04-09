import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);