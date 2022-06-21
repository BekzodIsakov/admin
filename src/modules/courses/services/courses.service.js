import { api } from '../../../services';

class CoursesService {
  constructor(api) {
    this.api = api;
  }

  getBoughtCourses = () => this.api.get('/get-my-courses');

  getCourses = () => this.api.get('/course');

  createQuestionReply = payload => this.api.post('/reply', payload);

  // singleCourse

  getCurrentCourseVideo = () => this.api.get('/lesson-video');

  getLessonAllCourses = () => this.api.get('/lesson-courses');

  // CourseTheme

  getCurrentCourseTheme = () => this.api.get('/course-theme');

  // CourseTasks

  getCurrentCourseTasks = courseInfo => this.api.post('/homework', courseInfo);

  sendHomeWorks = (data, homeWorkId) =>
    this.api.post(`/homework/${homeWorkId}/submission`, data);

  sendTask = taskFile =>
    this.api.post('/course-task', {
      taskFile
    });

  getRateForTask = () => this.api.get('/course-task/rate');

  reSendHomeWorks = (data, homeWorkId, submissionId) =>
    this.api.put(`/homework/${homeWorkId}/submission/${submissionId}`, data);

  checkingTask = () => this.api.get('/checking');

  // Notes

  getCourseNotes = courseId =>
    this.api.get(`/note/${courseId.data}/sort/${courseId.sort || 'desc'}`);

  addNote = note => this.api.post('/note', note);

  editNote = note => this.api.put('/note', note);

  deleteNote = noteInfo => this.api.delete('/note', noteInfo);

  // Question for course

  getAllCourseQuestions = ({ id, sort = '', search = '' }) =>
    this.api.get(
      `/question?${new URLSearchParams({
        course_id: id,
        sort_type: sort,
        search
      })}`
    );

  askQuestion = data => this.api.post('/question', data);

  likeQuestion = payload => this.api.patch('/upvote', payload);

  getCourseChapters = ({ id }) => this.api.get(`/course/${id}/chapter`);

  upsertLesson = data => this.api.patch('/upsert-lesson', data);

  // AdditionalFile

  getAdditionalFile = () => this.api.get('/additional-files');
}

export const coursesService = new CoursesService(api);
