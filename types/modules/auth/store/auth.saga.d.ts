export function requestLogin({ payload }: {
    payload: any;
}): Generator<any, void, unknown>;
export function requestConfirm({ payload }: {
    payload: any;
}): Generator<any, void, unknown>;
export function requestRegister({ payload }: {
    payload: any;
}): Generator<any, void, unknown>;
export function requestRefreshToken(action: any): Generator<any, import("redux-saga/effects").PutEffect<{
    payload: any;
    type: string;
}>, unknown>;
export function authRootSaga(): Generator<import("redux-saga/effects").AllEffect<import("redux-saga/effects").ForkEffect<never>>, void, unknown>;
export const tryCatchSaga: any;
//# sourceMappingURL=auth.saga.d.ts.map