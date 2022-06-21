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

const CoursesRoutes = lazy(() =>
  retry(
    () =>
      import('@courses/routes').then(m => ({
        default: m.CoursesRoutes
      })),
    retryConfig
  )
);

const PaymentRoutes = lazy(() =>
  retry(
    () =>
      import('@payments/routes').then(m => ({
        default: m.PaymentRoutes
      })),
    retryConfig
  )
);

const SettingRoutes = lazy(() =>
  retry(
    () =>
      import('@settings/routes').then(m => ({
        default: m.SettingRoutes
      })),
    retryConfig
  )
);

const NotificationRoutes = lazy(() =>
  retry(
    () =>
      import('@notifications/routes').then(m => ({
        default: m.NotificationRoutes
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
        <ProtectedRoute path='/courses' component={CoursesRoutes} />
        <ProtectedRoute path='/payments' component={PaymentRoutes} />
        <ProtectedRoute path='/settings' component={SettingRoutes} />
        <ProtectedRoute path='/notifications' component={NotificationRoutes} />
        <ProtectedRoute path='*' component={Error} />
      </Switch>
    </Suspense>
  );
});
