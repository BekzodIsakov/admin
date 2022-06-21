import { paymentService } from '@payments/services/payment.service';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';
import { all } from 'redux-saga/effects';
import { paymentsActions } from './payments.slice';

export function* paymentsRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchPaymentHistory',
      actions: paymentsActions,
      api: {
        method: paymentService.getPaymentHistory,
        callback: res => res.transactions
      }
    })
  ]);
}
