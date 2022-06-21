import { createSlice } from '@reduxjs/toolkit';
import { selectorHookFactory } from '@utils/selector-hook-factory';

const name = 'common';

const initialState = {
  loading: false,
  error: null,
  categories: [],
  profile: null,
  recommendedCourses: [],
  promoCourses: null,
  courses: [],
  ready: false
};

export const { actions: commonActions, reducer: commonReducer } = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
      state.ready = true;
    },

    setReady(state, action) {
      state.ready = action.payload;
    },

    fetchLatestNews(state) {
      state.loading = true;
    },

    fetchLatestNewsFulfilled(state, action) {
      state.latestNews = action.payload;
    },

    fetchCategories(state) {
      state.loading = false;
    },

    fetchCategoriesFulfilled(state, action) {
      state.categories = action.payload.categories;
      state.courses = action.payload.courses;
      state.ready = true;
    },

    fetchProfile(state) {
      state.loading = true;
      state.ready = false;
    },

    fetchProfileFulfilled(state, action) {
      state.profile = action.payload;
    },

    removeProfile(state) {
      state.profile = null;
      state.ready = true;
    },
    fetchRecommendedCourses(state) {
      state.loading = true;
    },
    fetchRecommendedCoursesFulfilled(state, action) {
      state.recommendedCourses = action.payload;
    },
    fetchPromoCourses(state) {
      state.loading = true;
    },
    fetchPromoCoursesFulfilled(state, action) {
      state.promoCourses = action.payload;
    }
  }
});

export const useCommonSelector = selectorHookFactory(name);

export const useProfileSelector = () => useCommonSelector('profile');
export const useReadySelector = () => useCommonSelector('ready');
