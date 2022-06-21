import { authReducer } from '@auth/store';
import { dashboardReducer } from '@dashboard/store';
import { notificationReducer } from '@notifications/store';
import { settingsReducer } from '@settings/store';
import { commonReducer } from './common';

export const rootReducer = {
  auth: authReducer,
  dashboard: dashboardReducer,
  notifications: notificationReducer,
  settings: settingsReducer,
  common: commonReducer
};
