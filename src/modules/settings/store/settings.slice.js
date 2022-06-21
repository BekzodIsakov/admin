import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';

const initialState = {
  loading: false,
  error: null,
  file: null
};

export const { actions: settingsActions, reducer: settingsReducer } =
  createSlice({
    name,
    initialState,
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },
      setError(state, action) {
        state.error = action.payload;
      },
      setFile(state, action) {
        state.file = action.payload;
      },
      updateSetting(state, payload) {
        state.loading = true;
      }
    }
  });
