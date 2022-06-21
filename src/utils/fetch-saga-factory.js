import { call, put, select, takeLatest } from 'redux-saga/effects';
import { tryCatchSagaFactory } from './try-catch-saga';

export const fetchSagaFactory = ({
  pattern,
  actions,
  api: { method, args = [], callback = res => res },
  cache = '',
  config
}) => {
  const tryCatchSaga = tryCatchSagaFactory(actions);
  const patternFulfilled = `${pattern}Fulfilled`;

  const watcherAction = actions[pattern];
  const fulFilledAction = actions[patternFulfilled];
  if (!watcherAction) {
    throw new Error(`patter: ${pattern} in actions not found`);
  }

  if (!fulFilledAction) {
    throw new Error(`patter: ${patternFulfilled} in actions not found`);
  }

  const request = tryCatchSaga(function* (action) {
    if (cache) {
      const item = yield select(state =>
        cache.split('.').reduce((acc, key) => {
          try {
            return acc[key];
          } catch (error) {
            throw new Error('[selectorHookFactory] Invalid selector');
          }
        }, state)
      );

      const isArray = Array.isArray(item);

      if (isArray ? item?.length > 0 : !!item) {
        return put(actions?.setLoading(false));
      }
    }
    const res = yield call(method, action.payload);
    yield put(fulFilledAction(callback(res, action.payload)));
  }, config);

  return takeLatest(watcherAction, request);
};
