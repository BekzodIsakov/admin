import { authRootSaga } from '@auth/store'
import { coursesRootSaga } from '@courses/store'
import { dashboardRootSaga } from '@dashboard/store'
import { notificationsRootSaga } from '@notifications/store'
import { paymentsRootSaga } from '@payments/store'
import { settingsRootSaga } from '@settings/store'
import { all, fork } from 'redux-saga/effects'
import { commonRootSaga } from './common'

export function* rootSaga() {
  yield all([
    fork(authRootSaga),
    fork(dashboardRootSaga),
    fork(paymentsRootSaga),
    fork(coursesRootSaga),
    fork(settingsRootSaga),
    fork(commonRootSaga),
    fork(notificationsRootSaga)
  ])
}
