export class FetchInterceptor {
    static hooks: string[];
    static register(hooks?: {}): FetchInterceptor;
    env: typeof globalThis;
    fetch: typeof fetch;
    unregister(): void;
    hijack(): void;
}
//# sourceMappingURL=fetch-interceptor.d.ts.map