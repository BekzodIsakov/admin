import { Route, Switch } from 'react-router-dom';
import { Payment } from './payment/payment.component';

export const PaymentRoutes = () => {
  return (
    <Switch>
      <Route path='/payments' component={Payment} />
    </Switch>
  );
};
