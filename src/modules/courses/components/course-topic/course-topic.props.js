import { useActiveLessonSelector } from '@courses/store';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

/**
 * <CourseTopic /> props
 */
export const useCourseTopicProps = _ => {
  // const dispatch = useDispatch();
  const lesson = useActiveLessonSelector();

  // useEffect(() => {
  //   if (!lesson) return;
  //   dispatch(
  //     coursesActions.fetchCourseHomeworks({
  //       course_id: lesson?.course_id,
  //       chapter_id: lesson?.chapter_id,
  //       lesson_id: lesson?.id
  //     })
  //   );
  // }, [dispatch, lesson]);

  return {
    lesson
  };
};
