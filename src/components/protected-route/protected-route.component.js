import React from 'react';
import { hoc } from '@utils/hoc';
import { useProtectedRouteProps } from './protected-route.props';
import { Redirect, Route } from 'react-router-dom';

/**
 * <ProtectedRoute />
 */
export const ProtectedRoute = hoc(
  useProtectedRouteProps,
  ({ component: Component, profile, ...props }) => (
    <Route
      {...props}
      component={(...props) =>
        profile ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
);
