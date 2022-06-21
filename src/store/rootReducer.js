import { authReducer } from '@auth/store';
import { dashboardReducer } from '@dashboard/store';
import { paymentsReducer } from '@payments/store';
import { notificationReducer } from '@notifications/store';
import { settingsReducer } from '@settings/store';
import { commonReducer } from './common';

export const rootReducer = {
  auth: authReducer,
  dashboard: dashboardReducer,
  payments: paymentsReducer,
  notifications: notificationReducer,
  settings: settingsReducer,
  common: commonReducer
};
