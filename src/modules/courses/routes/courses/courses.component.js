import { MainLayout } from '@components/layouts/main-layout';
import { hoc } from '@utils/hoc';

import { CourseCard } from '../../components/course-card';
import { CoursesCategory } from '../../components/courses-category';
import { useCoursesProps } from './course.props';

import { LastNews } from '@components/last-news';
import { ActiveBanner } from '@components/active-banner';
import { CoursesWidget } from '@components/sidebar-status/index';
import { RecommendCourses } from '@components/recommend-courses';
import { CoursesNotFound } from '@courses/components/not-found';

export const Courses = hoc(
  useCoursesProps,
  ({ categories }) => {
    return (
      <MainLayout
        rightSidebar={
          <>
            <LastNews />
            <ActiveBanner />
            <CoursesWidget />
          </>
        }
      >
        {categories?.length ? (
          categories?.map(row => (
            <CoursesCategory key={row.id} title={row.title.uz}>
              {row?.courses?.map(course => (
                <CourseCard key={course.id + row.id} item={course} />
              ))}
            </CoursesCategory>
          ))
        ) : (
          <CoursesNotFound />
        )}

        <RecommendCourses />
      </MainLayout>
    );
  },
  'Courses'
);
