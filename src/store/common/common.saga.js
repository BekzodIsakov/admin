import { all, call, put } from 'redux-saga/effects';
import { commonActions } from './common.slice';
import { categoriesService } from '../../services/categories.service';
import { commonService } from 'src/services/common.service';
import { groupByCategories } from '@utils/group-by-categories';
import { fetchSagaFactory } from '@utils/fetch-saga-factory';

export function* requestProfile() {
  try {
    const profile = yield call(commonService.getProfile);
    yield put(commonActions.fetchProfileFulfilled(profile.student));
  } catch (err) {
    yield put(commonActions.setError(err));
  } finally {
    yield put(commonActions.setLoading(false));
  }
}

export function* commonRootSaga() {
  yield all([
    fetchSagaFactory({
      pattern: 'fetchLatestNews',
      actions: commonActions,
      api: {
        method: commonService.getLatestNews,
        callback: res => res
      },
      cache: 'common.latestNews'
    }),
    fetchSagaFactory({
      pattern: 'fetchCategories',
      actions: commonActions,
      api: {
        method: categoriesService.getCategories,
        callback: res => ({
          categories: groupByCategories(res.student_courses),
          courses: res.student_courses
        })
      }
      // cache: 'common.categories'
    }),
    fetchSagaFactory({
      pattern: 'fetchProfile',
      actions: commonActions,
      api: {
        method: commonService.getProfile,
        callback: res => res.student
      }
    }),
    fetchSagaFactory({
      pattern: 'fetchRecommendedCourses',
      actions: commonActions,
      api: {
        method: commonService.recommendedCourses,
        callback: res => res.courses
      },
      cache: 'common.recommendedCourses'
    }),
    fetchSagaFactory({
      pattern: 'fetchPromoCourses',
      actions: commonActions,
      api: {
        method: commonService.promoCourses,
        callback: res => res?.promos?.[0]
      },
      cache: 'common.promoCourses'
    })
  ]);
}
