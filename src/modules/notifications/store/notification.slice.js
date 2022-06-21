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
    initialState
  });
