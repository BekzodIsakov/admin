/* eslint-disable no-mixed-operators */
import { coursesActions, useActiveLessonSelector } from '@courses/store';
import { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

export const BAD_SCORE = 71;
export const NORMAL_SCORE = 85;
export const PENDING_STATUS = 'pending';
export const REJECT_STATUS = 'incomplete';

/**
 * <CourseTasks /> props
 */
export const useCourseTasksProps = () => {
  const fileRef = useRef();
  const lesson = useActiveLessonSelector();
  const commentRef = useRef();
  const theme = useTheme();
  const [homeWorkFile, setHomeWorkFile] = useState([]);
  const dispatch = useDispatch();
  const isAllowResendSubmisson = useSelector(
    state => state.courses.resendSubmission
  );

  const courseHomeWorksStore = useSelector(
    state => state.courses.courseHomeWorks
  );
  const courseLoading = useSelector(state => state.courses.loading);
  const resendSubmission = useSelector(state => state.courses.resendSubmission);

  const courseHomeWorks = useMemo(() => {
    return courseHomeWorksStore?.[0];
  }, [courseHomeWorksStore]);

  const courseSubmission = useMemo(() => {
    return courseHomeWorks?.submissions?.[0];
  }, [courseHomeWorks?.submissions]);

  const isShowTextArea = useMemo(() => {
    return (
      resendSubmission ||
      (courseSubmission?.status === 'pending' && !!courseSubmission?.score) ||
      (courseHomeWorksStore?.length > 0 &&
        courseHomeWorks?.submissions?.length === 0)
    );
  }, [
    courseHomeWorks?.submissions?.length,
    courseHomeWorksStore?.length,
    courseSubmission?.score,
    courseSubmission?.status,
    resendSubmission
  ]);

  const handleGetFileChange = () => {
    setHomeWorkFile([fileRef.current.files[0]]);
  };

  const handleAllowToResendSubmission = () => {
    dispatch(coursesActions.isEnableResendSubmisson(true));
  };

  const handleDeleteSelectFile = () => {
    setHomeWorkFile([]);
    fileRef.current.value = null;
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isAllowResendSubmisson) {
      console.log('you can resend submisson');
    }

    const file = fileRef.current.files[0];
    if (!file) return;

    const formData = new FormData();

    formData.append('file', file);
    const payload = {
      file: formData,
      data: {
        title: commentRef.current.value
      },
      homeworkId: courseHomeWorks?.id,
      callback: () => {
        setHomeWorkFile([]);
        fileRef.current.value = null;
        commentRef.current.value = '';
        dispatch(
          coursesActions.fetchCourseHomeworks({
            course_id: lesson?.course_id,
            chapter_id: lesson?.chapter_id,
            lesson_id: lesson?.id
          })
        );
        dispatch(coursesActions.isEnableResendSubmisson(false));
      }
    };

    dispatch(coursesActions.sendSubmission(payload));
  };

  return {
    fileRef,
    homeWorkFile,
    handleGetFileChange,
    theme,
    courseHomeWorks,
    handleDeleteSelectFile,
    courseLoading,
    commentRef,
    onSubmit,
    isShowTextArea,
    courseSubmission,
    handleAllowToResendSubmission
  };
};
