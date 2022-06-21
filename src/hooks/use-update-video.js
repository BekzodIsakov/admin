import { coursesActions, useActiveLessonSelector } from '@courses/store';
import { useDispatch, useSelector } from 'react-redux';

export const useUpdateVideo = videoRef => {
  const dispatch = useDispatch();
  const activeLesson = useActiveLessonSelector();
  const courseChapters = useSelector(state => state.courses.courseChapters);

  const changeSecond = () => {
    const percent =
      (videoRef.current.currentTime * 100) / videoRef.current.duration;
    return courseChapters.map(chapter => {
      if (chapter.id === activeLesson.chapter_id) {
        return {
          ...chapter,
          lessons: chapter.lessons.map(lesson => {
            if (lesson.id === activeLesson.id) {
              return {
                ...lesson,
                seconds: videoRef.current.currentTime,
                progress:
                  activeLesson.progress < 95 ? percent : activeLesson.progress
              };
            }
            return lesson;
          })
        };
      }
      return chapter;
    });
  };

  const updateVideoTime = () => {
    const chapters = changeSecond();
    dispatch(coursesActions.changeChapters(chapters));
  };

  return {
    updateVideoTime
  };
};
