import { createSlice } from '@reduxjs/toolkit';

const name = 'dashboard';

const initialState = {
  loading: false,
  error: null
};

export const { actions: dashboardActions, reducer: dashboardReducer } =
  createSlice({
    name,
    initialState,
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      }
    }
  });
