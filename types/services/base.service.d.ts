export class BaseService {
    constructor(options?: {});
    _baseURL: any;
    _headers: any;
    _fetchJSON: (endpoint: any, options?: {}) => Promise<any>;
    setBasicAuth: (token: any) => BaseService;
    setHeader: (key: any, value: any) => BaseService;
    get: (endpoint: any, options?: {}) => Promise<any>;
    post: (endpoint: any, body: any, options?: {}) => Promise<any>;
    patch: (endpoint: any, body: any, options?: {}) => Promise<any>;
    put: (endpoint: any, body: any, options?: {}) => Promise<any>;
    delete: (endpoint: any, body: any, options?: {}) => Promise<any>;
}
export const api: BaseService;
//# sourceMappingURL=base.service.d.ts.map