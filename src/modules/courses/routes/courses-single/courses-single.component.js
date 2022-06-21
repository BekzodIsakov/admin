import { MainLayout } from '@components/layouts/main-layout/main-layout.component';
import { CourseTab } from '@courses/components/course-tab/course-tab.component';
import { CourseVideo } from '@courses/components/course-video/course-video.component';
import { CourseLessons } from '@courses/components/course-lessons/index';
import { hoc } from '@utils/hoc';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '@components/error';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  coursesActions,
  useActiveLessonSelector,
  useCourseChapters
} from '@courses/store';
import { useRef } from 'react';
import { VideoContext } from './course.context';

function findActiveLesson(chapters) {
  let lastLesson = null;

  chapters.forEach(chapter => {
    chapter.lessons.forEach(lesson => {
      if (lesson.is_latest) {
        return (lastLesson = lesson);
      }
    });
  });

  return lastLesson || chapters?.[0]?.lessons?.[0];
}

const useCoursesSingleProps = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const chapters = useCourseChapters();
  const videoRef = useRef();
  const courseTitle = useSelector(state => state.courses.courseTitle);

  const lesson = useActiveLessonSelector();

  useEffect(() => {
    if (!lesson) return;
    dispatch(
      coursesActions.fetchCourseHomeworks({
        course_id: lesson?.course_id,
        chapter_id: lesson?.chapter_id,
        lesson_id: lesson?.id
      })
    );
  }, [dispatch, lesson]);

  useEffect(() => {
    dispatch(
      coursesActions.fetchCourseChapters({
        id,
        callback: () => {
          setLoading(false);
        }
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    window.document.title = courseTitle?.uz;
  }, [courseTitle]);

  useEffect(() => {
    if (chapters?.length > 0) {
      dispatch(coursesActions.changeActiveCourse(findActiveLesson(chapters)));
    }
  }, [chapters, dispatch]);

  const error = useSelector(state => state.courses.error);

  return {
    error,
    loading,
    videoRef
  };
};

export const CoursesSingle = hoc(
  useCoursesSingleProps,
  ({ loading, videoRef, error }) => {
    if (error?.status === 404) {
      return <Error errorText="Kurs xaqida ma'lumotlar topilmadi." />;
    }

    return (
      <>
        {!loading && (
          <VideoContext.Provider value={videoRef}>
            <MainLayout rightSidebar={<CourseLessons />}>
              <CourseVideo />
              <CourseTab />
            </MainLayout>
          </VideoContext.Provider>
        )}
      </>
    );
  }
);
