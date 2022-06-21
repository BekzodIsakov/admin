export const notificationAction: import("@reduxjs/toolkit").CaseReducerActions<{
    setLoading(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        notifications: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setError(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        notifications: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    fetchNotification(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        notifications: any[];
    }>): void;
    fetchNotificationFulfilled(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        notifications: any[];
    }>, action: {
        payload: any;
        type: string;
    }): void;
    notificationsMarkAsRead(state: import("immer/dist/internal").WritableDraft<{
        loading: boolean;
        error: any;
        notifications: any[];
    }>): void;
}>;
export const notificationReducer: import("redux").Reducer<{
    loading: boolean;
    error: any;
    notifications: any[];
}, import("redux").AnyAction>;
//# sourceMappingURL=notification.slice.d.ts.map