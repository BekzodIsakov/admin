export const paymentsActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setLoading(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        payments: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setError(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        payments: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    fetchPaymentHistory(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        payments: any[];
    }>): void;
    fetchPaymentHistoryFulfilled(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        payments: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
}>;
export const paymentsReducer: import("redux").Reducer<{
    loading: boolean;
    error: any;
    payments: any[];
}, import("redux").AnyAction>;
//# sourceMappingURL=payments.slice.d.ts.map