import { commonService } from '@services/common.service';
import { settingService } from '@settings/services';
import { requestProfile } from '@store/common';
import { delay } from '@utils/delay';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { all, takeLatest, call, select } from 'redux-saga/effects';
import { settingsActions } from './settings.slice';

const tryCatchSaga = tryCatchSagaFactory(settingsActions);

const fetchFile = async (endpoint, options = {}) => {
  const res = await fetch(endpoint, {
    ...options
  });
  if (!res.ok) throw new Error(res.statusText);

  if (options.parseResponse !== false && res.status !== 204)
    return res.arrayBuffer();

  return undefined;
};

export function* requestUpdateSetting({ payload }) {
  let resFile;
  const profile = yield select(state => state.common.profile);
  if (!payload.file && !profile?.image?.uuid) {
    const res = yield call(fetchFile, payload.data.imageUrl, { method: 'GET' });
    const file = new Blob([res], { type: 'image/png' });
    const formData = new FormData();
    formData.append('file', file);
    payload.file = formData;
  }
  if (payload.file) {
    resFile = yield call(commonService.uploadFile, 'image', payload.file);
  }
  const settingsPayload = { ...payload.data };

  settingsPayload.image = {
    uuid: resFile?.filename || profile?.image?.uuid
  };
  yield call(settingService.updateSetting, settingsPayload);
  yield call(payload.callback);
  yield call(delay, 2000);
  yield call(requestProfile);
}

export function* settingsRootSaga() {
  yield all([
    takeLatest(
      settingsActions.updateSetting,
      tryCatchSaga(requestUpdateSetting)
    )
  ]);
}
