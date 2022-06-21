import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { dashboardActions } from './dashboard.slice';

export const tryCatchSaga = tryCatchSagaFactory(dashboardActions);

export function* dashboardRootSaga() {}
