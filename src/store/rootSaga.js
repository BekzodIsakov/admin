import { authRootSaga } from '@auth/store';
import { dashboardRootSaga } from '@dashboard/store';
import { paymentsRootSaga } from '@payments/store';
import { settingsRootSaga } from '@settings/store';
import { all, fork } from 'redux-saga/effects';
import { commonRootSaga } from './common';

export function* rootSaga() {
  yield all([
    fork(authRootSaga),
    fork(dashboardRootSaga),
    fork(paymentsRootSaga),
    fork(settingsRootSaga),
    fork(commonRootSaga)
  ]);
}
