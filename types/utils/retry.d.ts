type RetryOptions = {
    retriesLeft?: number;
    interval?: number;
    cb?: () => void;
}

export function retry(fn: () => Promise<unknown>, options: RetryOptions): Promise<any>;
//# sourceMappingURL=retry.d.ts.map