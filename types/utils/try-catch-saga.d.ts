import { PayloadActionCreator } from '@reduxjs/toolkit';
import { CallEffect, PutEffect } from 'redux-saga/effects';

export type TryCatchConfig = {
  disableLoading: boolean;
  disableError: boolean;
};

export function tryCatchSagaFactory(
  defaultAction: PayloadActionCreator<unknown>
): (
  saga: GeneratorFunction,
  { disableLoading, disableError }?: TryCatchSagaOptions
) => (
  action: PayloadActionCreator<unknown>
) => Generator<CallEffect<unknown> | PutEffect<any>, void, unknown>;
//# sourceMappingURL=try-catch-saga.d.ts.map
