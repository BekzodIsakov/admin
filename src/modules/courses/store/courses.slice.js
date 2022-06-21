import { createSlice } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'courses';

const initialState = {
  loading: false,
  error: null,
  activeLesson: null,
  courses: [],
  course: {},
  courseChapters: [],
  courseHomeWorks: [],
  courseNotes: [],
  editNote: false,
  sortType: 'desc',
  courseGroup: '',
  courseTitle: '',
  resendSubmission: false
};

export const { actions: coursesActions, reducer: coursesReducer } = createSlice(
  {
    name,
    initialState,
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },

      setError(state, action) {
        state.error = action.payload;
      },

      fetchCourses(state) {
        state.loading = true;
      },

      fetchCoursesFulfilled(state, action) {
        state.courses = action.payload;
      },

      fetchCourseChapters(state) {
        state.loading = true;
      },

      fetchCourseChaptersFulfilled(state, action) {
        state.courseChapters = action.payload.chapters;
        state.courseGroup = action.payload.group;
        state.courseTitle = action.payload.course_title;
      },

      changeChapters(state, action) {
        state.chapters = action.payload;
      },

      changeActiveCourse(state, action) {
        state.activeLesson = action.payload;
      },
      fetchCourseHomeworks(state) {
        state.loading = true;
      },
      fetchCourseHomeworksFulfilled(state, action) {
        state.courseHomeWorks = action.payload;
      },
      upsertLesson() {},

      sendSubmission(state) {
        state.loading = true;
      },
      fetchCourseNotes(state) {
        state.loading = true;
      },
      fetchCourseNotesFulfilled(state, action) {
        state.courseNotes = action.payload;
      },
      fetchCourseQuestions(state) {
        state.loading = true;
      },
      fetchCourseQuestionsFulfilled(state, action) {
        state.courseQuestions = action.payload;
      },
      addCourseQuestion(state) {
        state.loading = true;
      },
      addCourseQuestionReply(state) {
        state.loading = true;
      },
      sendNotes(state) {
        state.loading = true;
      },
      deleteNotes(state) {
        state.loading = true;
      },
      editNotes(state, action) {
        state.editNote = action.payload;
      },
      editNote(state) {
        state.loading = true;
      },
      sortNote(state, action) {
        state.sortType = action.payload;
      },
      likeCourseQuestion(state) {
        state.loading = true;
      },
      isEnableResendSubmisson(state, action) {
        state.resendSubmission = action.payload;
      }
    }
  }
);

export const useCoursesSelector = selectorHookFactory(name);

export const useActiveLessonSelector = () => useCoursesSelector('activeLesson');

export const useCourseId = () => useCoursesSelector('activeQuestion');

export const useCourseChapters = () => useCoursesSelector('courseChapters');
