import { coursesActions } from '@courses/store';
import { dashboardActions } from '@dashboard/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const useLastWatchedProps = () => {
  const dispatch = useDispatch();
  const lastWatchVideo = useSelector(state => state.dashboard.lastWatchVideo);
  const history = useHistory();

  const handleSwitchLesson = () => {
    history.push('/courses/' + lastWatchVideo?.course_id);
    dispatch(
      coursesActions.changeActiveCourse({
        ...lastWatchVideo.lesson,
        ...lastWatchVideo,
        lesson: null
      })
    );
  };

  useEffect(() => {
    dispatch(dashboardActions.fetchLastWatchVideo());
  }, [dispatch]);

  return {
    lastWatchVideo,
    handleSwitchLesson
  };
};
