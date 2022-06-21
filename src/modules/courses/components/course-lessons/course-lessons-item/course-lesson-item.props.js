import { useActiveLessonSelector } from '@courses/store';
import { useState } from 'react';

export const useCourseLessonItem = () => {
  const [isOpen, setOpen] = useState(true);
  const activeLesson = useActiveLessonSelector();

  const onHeaderBtnClick = () => {
    setOpen(!isOpen);
  };
  return { onHeaderBtnClick, isOpen, activeLesson };
};
