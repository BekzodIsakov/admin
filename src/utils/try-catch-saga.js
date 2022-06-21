import { put, call } from 'redux-saga/effects';

export const tryCatchSagaFactory =
  defaultAction =>
  (saga, { disableLoading, disableError } = {}) =>
    function* (action) {
      try {
        if (!disableLoading) {
          yield put(defaultAction.setLoading(true));
        }
        yield call(saga, action);
      } catch (error) {
        if (!disableError) {
          yield put(defaultAction.setError(error));
        }
      } finally {
        if (!disableLoading) {
          yield put(defaultAction.setLoading(false));
        }
      }
    };
