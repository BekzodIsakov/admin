import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './login';

export const AuthRoutes = props => {
  return (
    <Switch>
      <Route path='' component={Login} />
    </Switch>
  );
};
