import { createSlice } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'common';

const initialState = {
  loading: false,
  error: null,
  profile: null,
  ready: false
};

export const { actions: commonActions, reducer: commonReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
      state.ready = true;
    },

    setReady(state, action) {
      state.ready = action.payload;
    },

    fetchProfile(state) {
      state.loading = true;
      state.ready = false;
    },

    fetchProfileFulfilled(state, action) {
      state.profile = action.payload;
    },

    removeProfile(state) {
      state.profile = null;
      state.ready = true;
    }
  }
});

export const useCommonSelector = selectorHookFactory(name);

export const useProfileSelector = () => useCommonSelector('profile');
export const useReadySelector = () => useCommonSelector('ready');
