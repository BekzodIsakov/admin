export const coursesService: CoursesService;
declare class CoursesService {
    constructor(api: any);
    api: any;
    getBoughtCourses: () => any;
    getCourses: () => any;
    createQuestionReply: (payload: any) => any;
    getCurrentCourseVideo: () => any;
    getLessonAllCourses: () => any;
    getCurrentCourseTheme: () => any;
    getCurrentCourseTasks: (courseInfo: any) => any;
    sendHomeWorks: (data: any, homeWorkId: any) => any;
    sendTask: (taskFile: any) => any;
    getRateForTask: () => any;
    reSendHomeWorks: (data: any, homeWorkId: any, submissionId: any) => any;
    checkingTask: () => any;
    getCourseNotes: (courseId: any) => any;
    addNote: (note: any) => any;
    editNote: (note: any) => any;
    deleteNote: (noteInfo: any) => any;
    getAllCourseQuestions: ({ id, sort, search }: {
        id: any;
        sort?: string;
        search?: string;
    }) => any;
    askQuestion: (data: any) => any;
    likeQuestion: (payload: any) => any;
    getCourseChapters: ({ id }: {
        id: any;
    }) => any;
    upsertLesson: (data: any) => any;
    getAdditionalFile: () => any;
}
export {};
//# sourceMappingURL=courses.service.d.ts.map