import { authRootSaga } from '@auth/store';
import { dashboardRootSaga } from '@dashboard/store';
import { settingsRootSaga } from '@settings/store';
import { all, fork } from 'redux-saga/effects';
import { commonRootSaga } from './common';

export function* rootSaga() {
  yield all([
    fork(authRootSaga),
    fork(dashboardRootSaga),
    fork(settingsRootSaga),
    fork(commonRootSaga)
  ]);
}
