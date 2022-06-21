export const dashboardActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setLoading(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setError(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    downloadCertificate(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>): void;
    fetchTaskStatistics(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>): void;
    fetchLastWatchVideo(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>): void;
    fetchCertificates(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>): void;
    fetchTaskStatisticsFulfilled(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    fetchLastWatchVideoFulfilled(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    fetchCertificatesFulfilled(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        taskStatistics: any[];
        lastWatchVideo: {};
        certificates: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
}>;
export const dashboardReducer: import("redux").Reducer<{
    loading: boolean;
    error: any;
    taskStatistics: any[];
    lastWatchVideo: {};
    certificates: any[];
}, import("redux").AnyAction>;
//# sourceMappingURL=dashboard.slice.d.ts.map