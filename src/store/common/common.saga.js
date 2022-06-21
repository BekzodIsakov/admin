import { all, call, put } from 'redux-saga/effects';
import { commonActions } from './common.slice';
import { commonService } from 'src/services/common.service';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';

export function* requestProfile() {
  try {
    const profile = yield call(commonService.getProfile);
    yield put(commonActions.fetchProfileFulfilled(profile.student));
  } catch (err) {
    yield put(commonActions.setError(err));
  } finally {
    yield put(commonActions.setLoading(false));
  }
}

export function* commonRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchProfile',
      actions: commonActions,
      api: {
        method: commonService.getProfile,
        callback: res => res.student
      }
    })
  ]);
}
