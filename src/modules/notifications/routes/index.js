import { Route, Switch } from 'react-router-dom';
import { Notification } from './notification/notification.component';

export const NotificationRoutes = () => {
  return (
    <Switch>
      <Route path='/notifications' component={Notification} />
    </Switch>
  );
};
