/* <YourPayments /> */

import { paymentsActions } from '@payments/store';
import { dateFormatByMonth } from '@utils/date-format';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useProfilePaymentProps = () => {
  const dispatch = useDispatch();
  const payments = useSelector(state => state.payments.payments);

  useEffect(() => {
    dispatch(paymentsActions.fetchPaymentHistory());
  }, [dispatch]);

  return {
    payments: payments.map(item => {
      const date = new Date(parseInt(item.created_at));
      const day = dateFormatByMonth(date);
      return {
        ...item,
        day
      };
    })
  };
};
