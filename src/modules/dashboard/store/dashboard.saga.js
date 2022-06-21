import { dashboardService } from '@dashboard/services/dashboard.service';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { all, takeLatest, call } from 'redux-saga/effects';
import { dashboardActions } from './dashboard.slice';

export const tryCatchSaga = tryCatchSagaFactory(dashboardActions);

function* requestDownload({ payload }) {
  const res = yield call(
    dashboardService.downloadCertificate,
    payload.courseId
  );
  yield payload.success(res);
}

export function* dashboardRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchTaskStatistics',
      actions: dashboardActions,
      api: {
        method: dashboardService.getTaskStatistics,
        callback: res => res.homeworks
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchLastWatchVideo',
      actions: dashboardActions,
      api: {
        method: dashboardService.getLastWatchedVideo,
        callback: res => res
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchCertificates',
      actions: dashboardActions,
      api: {
        method: dashboardService.getCertificates,
        callback: res => res.certificates
      }
    }),
    takeLatest(
      dashboardActions.downloadCertificate,
      tryCatchSaga(requestDownload)
    )
  ]);
}
