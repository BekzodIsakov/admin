export const authActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setLoading(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    logout(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>): void;
    login(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>): void;
    confirm(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>): void;
    register(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>): void;
    setError(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setUserFound(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setTokens(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    setSecret(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>, action: {
        payload: any;
        type: string;
    }): void;
    refreshToken(state: import("immer/dist/internal").WritableDraft<{
        tokens: any;
        loading: boolean;
        error: any;
        userFound: boolean;
        secret: string;
    }>): void;
}>;
export const authReducer: import("redux").Reducer<{
    tokens: any;
    loading: boolean;
    error: any;
    userFound: boolean;
    secret: string;
}, import("redux").AnyAction>;
export const useAuthSelector: any;
export function useAuthTokens(): any;
export function useAuthUserFound(): any;
export function useAuthSecret(): any;
export function useAuthLoading(): any;
export function useAuthError(): any;
//# sourceMappingURL=auth.slice.d.ts.map