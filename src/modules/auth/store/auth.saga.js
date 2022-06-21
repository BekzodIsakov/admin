import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { authService } from '@auth/services/auth.service';
import { authActions } from './auth.slice';
import { checkIsMobile } from '@utils/isMobile';
import { storageService } from 'src/services/storage.service';
import { commonActions } from 'src/store/common/common.slice';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { requestProfile } from '@store/common';

export const tryCatchSaga = tryCatchSagaFactory(authActions);

export function* requestLogin({ payload }) {
  const res = yield call(authService.sendCode, payload.phone);
  yield put(authActions.setUserFound(res.user_found));
  yield put(authActions.setSecret(res.secret));
  yield put(authActions.setError(null));
  yield payload.callback();
}

export function* requestConfirm({ payload }) {
  const isMobile = yield checkIsMobile();
  yield put(authActions.setError(null));
  const secret = yield select(state => state.auth.secret);
  const res = yield call(authService.confirmCode, {
    ...payload.data,
    device: isMobile ? 'mobile' : 'web',
    secret
  });
  yield put(authActions.setTokens(res.token));
  yield put(commonActions.fetchProfileFulfilled(res.student));
  storageService.setCookie('shared_token', res.token.access_token);
  storageService.setRefreshToken(res.token.refresh_token);
  storageService.setAccessToken(res.token.access_token);
  yield put(commonActions.fetchProfile());
  yield payload.callback();
}

export function* requestRegister({ payload }) {
  const isMobile = yield checkIsMobile();
  yield put(authActions.setError(null));
  const secret = yield select(state => state.auth.secret);
  const res = yield call(authService.register, {
    ...payload.data,
    device: isMobile ? 'mobile' : 'web',
    secret
  });
  yield put(authActions.setTokens(res.token));
  yield put(commonActions.fetchProfileFulfilled(res.student));
  storageService.setCookie('shared_token', res.token.access_token);
  storageService.setRefreshToken(res.token.refresh_token);
  storageService.setAccessToken(res.token.access_token);
  yield call(requestProfile);
  yield payload.callback();
}

export function* requestRefreshToken(action) {
  const refreshToken = yield select(state => state.auth.tokens?.refresh_token);
  const localRefreshToken = yield storageService.getRefreshToken();
  if (!refreshToken && !localRefreshToken) {
    return put(authActions.setLoading(false));
  }
  const res = yield call(
    authService.refreshTokens,
    refreshToken || localRefreshToken
  );
  yield put(authActions.setTokens(res.token));
  storageService.setCookie('shared_token', res.token.access_token);
  storageService.setRefreshToken(res.token.refresh_token);
  storageService.setAccessToken(res.token.access_token);
  yield put(commonActions.fetchProfile());
}

export function* authRootSaga() {
  yield all([
    takeLatest(authActions.login, tryCatchSaga(requestLogin)),
    takeLatest(authActions.confirm, tryCatchSaga(requestConfirm)),
    takeLatest(authActions.register, tryCatchSaga(requestRegister)),
    takeLatest(authActions.refreshToken, tryCatchSaga(requestRefreshToken))
  ]);
}
