import { useActiveLessonSelector } from '@courses/store';
import { useProfileSelector } from '@store/common';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

/**
 * <CourseVideo /> props
 */
export const useCourseVideoProps = () => {
  const { phone: watermark } = useProfileSelector();
  const lesson = useActiveLessonSelector();
  const courseChapters = useSelector(state => state.courses.courseChapters);

  const src = useMemo(() => {
    return `https://cdn.najottalim.uz/najottalim/videos/${lesson?.file?.file_id}/cmaf/h264.mpd`;
  }, [lesson?.file?.file_id]);

  const findActiveLessonIndex = useCallback(() => {
    const chapter = courseChapters?.find(
      chapter => chapter.id === lesson?.chapter_id
    );
    const index = chapter?.lessons?.map(item => item.id).indexOf(lesson?.id);
    return { index, chapter };
  }, [courseChapters, lesson?.chapter_id, lesson?.id]);

  const findPrevChapter = useCallback(() => {
    const chapterIndex = courseChapters
      .map(chapter => chapter.id)
      .indexOf(lesson?.chapter_id);
    const prevChapter = courseChapters[chapterIndex - 1];

    if (prevChapter) {
      return prevChapter?.lessons?.length > 0 && prevChapter?.lessons[0];
    }

    return null;
  }, [courseChapters, lesson?.chapter_id]);

  const findNextChapter = useCallback(() => {
    const chapterIndex = courseChapters
      .map(chapter => chapter.id)
      .indexOf(lesson?.chapter_id);
    const nextChapter = courseChapters[chapterIndex + 1];

    if (nextChapter) {
      return nextChapter?.lessons?.length > 0 && nextChapter?.lessons[0];
    }

    return null;
  }, [courseChapters, lesson?.chapter_id]);

  const next = useMemo(() => {
    const { index, chapter } = findActiveLessonIndex();
    return chapter?.lessons?.[index + 1] || findNextChapter();
  }, [findActiveLessonIndex, findNextChapter]);

  const prev = useMemo(() => {
    const { index, chapter } = findActiveLessonIndex();
    return chapter?.lessons?.[index - 1] || findPrevChapter();
  }, [findActiveLessonIndex, findPrevChapter]);

  return {
    watermark,
    lesson,
    next,
    prev,
    src
  };
};
