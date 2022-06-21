import { createSlice } from '@reduxjs/toolkit';

const name = 'notifications';

const initialState = {
  loading: false,
  error: null,
  notifications: []
};

export const { actions: notificationAction, reducer: notificationReducer } =
  createSlice({
    name,
    initialState,
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },
      setError(state, action) {
        state.loading = action.payload;
      },
      fetchNotification(state) {
        state.loading = true;
      },
      fetchNotificationFulfilled(state, action) {
        state.notifications = action.payload;
      },
      notificationsMarkAsRead(state) {
        state.loading = true;
      }
    }
  });
