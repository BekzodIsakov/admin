import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard.component';

export const DashboardRoutes = () => {
  return (
    <Switch>
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  );
};
