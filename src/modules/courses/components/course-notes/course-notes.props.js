import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useMemo, useState } from 'react';
import { coursesActions, useActiveLessonSelector } from '@courses/store';
import { useRef } from 'react';
import { VideoContext } from '@courses/routes/courses-single/course.context';
import { secondsFormat } from '@utils/date-format-time';
/**
 * <CourseNotes /> props
 */

const filterOptions = [
  { label: 'Oddiy tartiblash', value: 'simple' },
  { label: 'Teskari tartiblash', value: 'desc' }
];

export const useCourseNotesProps = _ => {
  const dispatch = useDispatch();
  const lesson = useActiveLessonSelector();
  const courseAllNotes = useSelector(state => state.courses.courseNotes);
  const isEditableNow = useSelector(state => state.courses.editNote);
  const [isNoteFocused, setIsNoteFocused] = useState(false);
  const [activeLessonSeconds, setActiveLessonSeconds] = useState(0);
  const formRef = useRef(null);
  const sortType = useSelector(state => state.courses.sortType);

  const time = useMemo(() => {
    return secondsFormat(activeLessonSeconds);
  }, [activeLessonSeconds]);

  const textareaRef = useRef();
  const videoRef = useContext(VideoContext);

  const onFocusTextarea = () => {
    videoRef.current?.pause();
    setIsNoteFocused(true);
  };

  useEffect(() => {
    if (isEditableNow) {
      textareaRef.current.focus();
      textareaRef.current.value = isEditableNow?.text;
    }
  }, [isEditableNow]);

  const handleAddBtn = () => {
    textareaRef.current.focus();
  };

  useEffect(() => {
    dispatch(
      coursesActions.fetchCourseNotes({
        data: lesson?.course_id,
        sort: sortType
      })
    );
  }, [lesson, dispatch, sortType]);

  const changeFilter = value => {
    if (sortType === 'desc') {
      dispatch(coursesActions.sortNote('asc'));
    } else if (sortType === 'asc') {
      dispatch(coursesActions.sortNote('desc'));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = Math.floor(videoRef.current.currentTime);

      setActiveLessonSeconds(seconds);
    }, []);
    return () => clearInterval(timer);
  });

  const onSubmit = e => {
    e.preventDefault();

    if (isEditableNow.available) {
      const payload = {
        title: textareaRef.current.value,
        note_id: isEditableNow.id,
        course_id: lesson?.course_id,
        chapter_id: isEditableNow.chapterId,
        lesson_id: isEditableNow.lessonId
      };

      dispatch(
        coursesActions.editNote({
          data: payload,
          callback: () => {
            dispatch(
              coursesActions.fetchCourseNotes({
                data: lesson?.course_id
              })
            );
            videoRef.current?.play();
            textareaRef.current.value = '';
            setIsNoteFocused(false);
          }
        })
      );
      dispatch(coursesActions.editNotes(false));
    } else {
      const payload = {
        course_id: lesson?.course_id,
        chapter_id: lesson?.chapter_id,
        lesson_id: lesson?.id,
        position: activeLessonSeconds,
        title: textareaRef.current.value
      };

      dispatch(
        coursesActions.sendNotes({
          data: payload,
          callback: () => {
            dispatch(
              coursesActions.fetchCourseNotes({
                data: lesson?.course_id
              })
            );
            videoRef.current?.play();
            textareaRef.current.value = '';
            setIsNoteFocused(false);
          }
        })
      );
    }
  };

  const cancelBtn = () => {
    formRef.current.reset();
    textareaRef.current.value = '';
    videoRef.current?.play();
    dispatch(coursesActions.editNotes(false));
    setIsNoteFocused(false);
  };

  const handleTimeClick = item => {
    const data = {
      ...item?.lesson,
      seconds: item.position,
      chapter_id: item?.chapter?.id,
      course_id: lesson?.course_id
    };
    dispatch(coursesActions.changeActiveCourse(data));
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    filterOptions,
    courseAllNotes,
    isNoteFocused,
    onFocusTextarea,
    textareaRef,
    handleAddBtn,
    time,
    onSubmit,
    formRef,
    cancelBtn,
    secondsFormat,
    isEditableNow,
    changeFilter,
    handleTimeClick
  };
};
