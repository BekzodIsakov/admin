import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoutes } from '@auth/routes';
import { useAppProps } from './app.props';
import { hoc } from '@utils/hoc';
import { Loading } from '@components/loading';
import { ProtectedRoute } from '@components/protected-route';
import { Error } from '@components/error';
import { retry } from '@utils/retry';

const retryConfig = {
  retriesLeft: 5,
  interval: 1000,
  cb: () => ({
    default: <Error errorText="Internetga ulanib bo'lmadi" />
  })
};

const DashboardRoutes = lazy(() =>
  retry(
    () =>
      import('@dashboard/routes').then(m => ({
        default: m.DashboardRoutes
      })),
    retryConfig
  )
);

export const App = hoc(useAppProps, ({ ready }) => {
  if (!ready) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/login' component={AuthRoutes} />
        <Redirect exact from='/' to='/dashboard' />
        <ProtectedRoute path='/dashboard' component={DashboardRoutes} />
        <ProtectedRoute path='*' component={Error} />
      </Switch>
    </Suspense>
  );
});
