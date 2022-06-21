import { createSlice } from '@reduxjs/toolkit';

const name = 'dashboard';

const initialState = {
  loading: false,
  error: null,
  taskStatistics: [],
  lastWatchVideo: {},
  certificates: []
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
      },
      downloadCertificate(state) {
        state.loading = true;
      },
      fetchTaskStatistics(state) {
        state.loading = true;
      },
      fetchLastWatchVideo(state) {
        state.loading = true;
      },
      fetchCertificates(state) {
        state.loading = true;
      },
      fetchTaskStatisticsFulfilled(state, action) {
        state.taskStatistics = action.payload;
      },
      fetchLastWatchVideoFulfilled(state, action) {
        state.lastWatchVideo = action.payload;
      },
      fetchCertificatesFulfilled(state, action) {
        state.certificates = action.payload;
      }
    }
  });
