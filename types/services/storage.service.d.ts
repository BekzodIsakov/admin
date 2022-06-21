export const storageService: StorageService;
declare class StorageService {
    setItem(key: any, value: any): void;
    getItem(key: any): string;
    removeItem(key: any): void;
    clear(): void;
    getRefreshToken: () => string;
    setRefreshToken: (token: any) => void;
    removeRefreshToken: () => void;
    getAccessToken: () => string;
    setAccessToken: (token: any) => void;
    removeAccessToken: () => void;
    setCookie(name: any, value: any, days: number, path: any): void;
    getCookie(name: any): string;
    deleteCookie: (name: any) => void;
}
export {};
//# sourceMappingURL=storage.service.d.ts.map