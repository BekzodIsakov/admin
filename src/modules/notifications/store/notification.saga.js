import { notificationService } from '@notifications/services/notifications.service';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { all, call, takeLatest } from 'redux-saga/effects';
import { notificationAction } from './notification.slice';

const tryCatchSaga = tryCatchSagaFactory(notificationAction);

export function* requestMarkAsRead(action) {
  yield call(notificationService.notificationsMarkAsRead, {
    news: action.payload.data
  });
  yield action.payload.callback();
}

export function* notificationsRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchNotification',
      actions: notificationAction,
      api: {
        method: notificationService.getNotification,
        callback: res => res.news
      }
    }),
    takeLatest(
      notificationAction.notificationsMarkAsRead,
      tryCatchSaga(requestMarkAsRead)
    )
  ]);
}
