import { createSlice } from '@reduxjs/toolkit';

const name = 'payments';

const initialState = {
  loading: false,
  error: null,
  payments: []
};

export const { actions: paymentsActions, reducer: paymentsReducer } =
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
      fetchPaymentHistory(state) {
        state.loading = true;
      },
      fetchPaymentHistoryFulfilled(state, action) {
        state.payments = action.payload;
      }
    }
  });
