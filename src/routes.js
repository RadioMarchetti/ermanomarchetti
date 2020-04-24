import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import Login from './pages/Login';

import Register from './pages/Register';

import Profile from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        {/* <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
