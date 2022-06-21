export const store: import("@reduxjs/toolkit").EnhancedStore<{
    auth: unknown;
    dashboard: unknown;
    payments: unknown;
    notifications: unknown;
    courses: unknown;
    settings: unknown;
    common: {
        loading: boolean;
        error: any;
        categories: any[];
        profile: any;
        recommendedCourses: any[];
        promoCourses: any;
        courses: any[];
        ready: boolean;
    };
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<{
    auth: unknown;
    dashboard: unknown;
    payments: unknown;
    notifications: unknown;
    courses: unknown;
    settings: unknown;
    common: {
        loading: boolean;
        error: any;
        categories: any[];
        profile: any;
        recommendedCourses: any[];
        promoCourses: any;
        courses: any[];
        ready: boolean;
    };
}, import("redux").AnyAction, undefined>, import("redux-saga").SagaMiddleware<object>]>>;
//# sourceMappingURL=index.d.ts.map