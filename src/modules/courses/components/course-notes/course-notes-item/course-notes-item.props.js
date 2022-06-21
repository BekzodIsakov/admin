import { useDispatch } from 'react-redux';
import { coursesActions, useActiveLessonSelector } from '@courses/store';

export const useCourseNotesItemProps = ({ lessonId, chapterId }) => {
  const lesson = useActiveLessonSelector();
  const dispatch = useDispatch();

  const editNote = e => {
    dispatch(
      coursesActions.editNotes({
        available: true,
        text: e.text,
        id: e.id,
        lessonId: lessonId,
        chapterId: chapterId
      })
    );
  };

  const deleteNote = id => {
    const payload = {
      course_id: lesson?.course_id,
      chapter_id: chapterId,
      lesson_id: lessonId,
      note_id: id
    };

    dispatch(
      coursesActions.deleteNotes({
        data: payload,
        callback: () =>
          dispatch(
            coursesActions.fetchCourseNotes({
              data: lesson?.course_id
            })
          )
      })
    );
  };

  return {
    deleteNote,
    editNote
  };
};
