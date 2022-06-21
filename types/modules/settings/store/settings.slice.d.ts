export const settingsActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setLoading(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        file: any;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setError(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        file: any;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setFile(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        file: any;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    updateSetting(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        file: any;
    }>): void;
}>;
export const settingsReducer: import("redux").Reducer<{
    loading: boolean;
    error: any;
    file: any;
}, import("redux").AnyAction>;
//# sourceMappingURL=settings.slice.d.ts.map