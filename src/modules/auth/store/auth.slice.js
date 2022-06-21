import { createSlice } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'auth';

const initialState = {
  tokens: null,
  loading: false,
  error: null,
  userFound: false,
  secret: ''
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.tokens = null;
    },
    login(state) {
      state.loading = true;
    },
    confirm(state) {
      state.loading = true;
    },
    register(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUserFound(state, action) {
      state.userFound = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    setSecret(state, action) {
      state.secret = action.payload;
    },
    refreshToken(state) {
      state.loading = true;
    }
  }
});

export const useAuthSelector = selectorHookFactory(name);
export const useAuthTokens = () => useAuthSelector('tokens');
export const useAuthUserFound = () => useAuthSelector('userFound');
export const useAuthSecret = () => useAuthSelector('secret');
export const useAuthLoading = () => useAuthSelector('loading');
export const useAuthError = () => useAuthSelector('error');
