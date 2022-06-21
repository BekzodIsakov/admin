import { MainLayout } from '@components/layouts/main-layout';
import { hoc } from '@utils/hoc';

import { RecommendCourses } from '@components/recommend-courses';

import { DashboardWelcome } from '@dashboard/components/dashboard-welcome';

import { StudentResult } from '@dashboard/components/student-result';
import { LastNews } from '@components/last-news';
import { ActiveBanner } from '@components/active-banner';
import { LastWatched } from '@dashboard/components';
import { ProfileCertificate } from '@dashboard/components/profile-certificate';
import { CoursesWidget } from '@components/sidebar-status/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { commonActions } from '@store/common';

const useDashboardProps = () => {
  const courses = useSelector(state => state.common.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.fetchCategories());
  }, [dispatch]);

  return {
    courses
  };
};

export const Dashboard = hoc(
  useDashboardProps,
  ({ courses }) => {
    return (
      <>
        <MainLayout
          rightSidebar={
            <>
              <LastNews />
              {!!courses.length ? <CoursesWidget /> : <ActiveBanner />}
            </>
          }
        >
          {!!courses.length ? (
            <>
              <LastWatched />
              <ProfileCertificate />
              <StudentResult />
            </>
          ) : (
            <>
              <DashboardWelcome />
              <RecommendCourses />
            </>
          )}
        </MainLayout>
      </>
    );
  },
  'Dashboard'
);
