export const commonService: CommonService;
declare class CommonService {
    constructor(api: any, storageService: any);
    api: any;
    storageService: any;
    getLatestNews: () => any;
    recommendedCourses: () => any;
    getProfile: () => any;
    promoCourses: () => any;
    uploadFile: (folder: any, data: any) => any;
}
export {};
//# sourceMappingURL=common.service.d.ts.map