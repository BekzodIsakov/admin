import { Route, Switch } from 'react-router-dom';
import { Settings } from './settings/settings.component';

export const SettingRoutes = () => {
  return (
    <Switch>
      <Route path='/settings' component={Settings} />
    </Switch>
  );
};
