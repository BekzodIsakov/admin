import { CaseReducerActions } from "@reduxjs/toolkit";
import { ForkEffect } from "redux-saga/effects";
import { TryCatchConfig } from "./try-catch-saga";

type FetchSagaFactoryConfig<T, S, R> = {
    pattern: string;
    actions: CaseReducerActions<T>;
    api: {
        method: (...args: S[]) => void;
        args?: S[];
        callback?: (res: R) => unknown;
    };
    cache?: string;
    config: TryCatchConfig;
}

export function fetchSagaFactory(options: FetchSagaFactory): ForkEffect<never>;
//# sourceMappingURL=fetch-saga-factory.d.ts.map