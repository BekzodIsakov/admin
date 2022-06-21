import { all, takeLatest, call, select } from 'redux-saga/effects';
import { coursesActions } from './courses.slice';
import { coursesService } from '../services';
import { commonService } from '@services/common.service';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';

const normalizeChapters = (chapters, course_id) => {
  return chapters?.map(chapter => ({
    ...chapter,
    lessons:
      chapter.lessons?.map(lesson => ({
        ...lesson,
        course_id,
        chapter_id: chapter.id
      })) || []
  }));
};

const tryCatchSaga = tryCatchSagaFactory(coursesActions);

export function* requestUpsertLesson(action) {
  yield call(coursesService.upsertLesson, action.payload);
}

export function* requestSendHomeWork(action) {
  const courseGroup = yield select(state => state.courses.courseGroup);
  const isEnableToResendSubmission = yield select(
    state => state.courses.resendSubmission
  );
  const submissionId = yield select(
    state => state.courses.courseHomeWorks[0]?.submissions[0]?.id
  );
  const resFile = yield call(
    commonService.uploadFile,
    'homework',
    action.payload.file
  );

  const homeworksPayload = { ...action.payload.data, group_id: courseGroup };

  homeworksPayload.attachment = {
    uuid: resFile?.filename,
    size: resFile?.size,
    title: action.payload.file?.get('file')?.name
  };
  if (isEnableToResendSubmission) {
    yield call(
      coursesService.reSendHomeWorks,
      homeworksPayload,
      action.payload.homeworkId,
      submissionId
    );
  } else {
    yield call(
      coursesService.sendHomeWorks,
      homeworksPayload,
      action.payload.homeworkId
    );
  }

  yield action.payload.callback();
}

export function* requestAddQuestion(action) {
  yield call(coursesService.askQuestion, action.payload.data);
  yield action.payload.callback();
}
export function* requestSendNotes(action) {
  yield call(coursesService.addNote, action.payload.data);
  yield action.payload.callback();
}

export function* requestAddQuestionReply(action) {
  yield call(coursesService.createQuestionReply, action.payload.data);
  yield action.payload.callback();
}

export function* editNote(action) {
  yield call(coursesService.editNote, action.payload.data);
  yield action.payload.callback();
}

export function* deleteNote(action) {
  yield call(coursesService.deleteNote, action.payload.data);
  yield action.payload.callback();
}

export function* requestLikeQuestion(action) {
  const res = yield call(coursesService.likeQuestion, action.payload.data);
  yield action.payload.callback(res);
}

export function* coursesRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchCourseChapters',
      actions: coursesActions,
      api: {
        method: coursesService.getCourseChapters,
        callback: (res, payload) => {
          const normalChapters = normalizeChapters(res.chapters, payload.id);
          payload.callback();
          return {
            chapters: normalChapters,
            group: res.group_id,
            course_title: res.course_title
          };
        }
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchCourseHomeworks',
      actions: coursesActions,
      api: {
        method: coursesService.getCurrentCourseTasks,
        callback: res => res.homeworks
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchCourseNotes',
      actions: coursesActions,
      api: {
        method: coursesService.getCourseNotes,
        callback: res => res.notes
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchCourseQuestions',
      actions: coursesActions,
      api: {
        method: coursesService.getAllCourseQuestions,
        callback: res => res.questions
      }
    }),

    takeLatest(coursesActions.upsertLesson, tryCatchSaga(requestUpsertLesson)),
    takeLatest(
      coursesActions.sendSubmission,
      tryCatchSaga(requestSendHomeWork)
    ),
    takeLatest(
      coursesActions.addCourseQuestion,
      tryCatchSaga(requestAddQuestion)
    ),
    takeLatest(coursesActions.sendNotes, tryCatchSaga(requestSendNotes)),
    takeLatest(coursesActions.deleteNotes, tryCatchSaga(deleteNote)),
    takeLatest(
      coursesActions.addCourseQuestionReply,
      tryCatchSaga(requestAddQuestionReply)
    ),
    takeLatest(coursesActions.editNote, tryCatchSaga(editNote)),
    takeLatest(
      coursesActions.likeCourseQuestion,
      tryCatchSaga(requestLikeQuestion)
    )
  ]);
}
