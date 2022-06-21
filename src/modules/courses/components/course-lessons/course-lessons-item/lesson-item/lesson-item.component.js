import {
  CourseLessonItem,
  CourseLessonItemLink,
  CourseLessonItemLinkContent,
  CourseLessonItemLinkIcon,
  CourseLessonItemLinkLessonCount,
  CourseLessonItemLinkLessonHeading
} from './lesson-item.style';

import itemCheckedIcon from '@assets/img/checked.svg';
import itemPlayIcon from '@assets/img/play.svg';
import { useDispatch } from 'react-redux';
import { coursesActions } from '@courses/store';
import { useContext } from 'react';
import { VideoContext } from '@courses/routes/courses-single/course.context';
import { useUpdateVideo } from '@hooks/use-update-video';

export const LessonItem = ({
  lessonSequence,
  item,
  isViewed = false,
  inProgress = false,
  isDisabled = false
}) => {
  const dispatch = useDispatch();
  const handleChangeVideo = lesson => {
    dispatch(coursesActions.changeActiveCourse(lesson));
  };

  const videoRef = useContext(VideoContext);
  const { updateVideoTime } = useUpdateVideo(videoRef);

  return (
    <CourseLessonItem onClick={updateVideoTime.bind(null, videoRef)}>
      <CourseLessonItemLink onClick={handleChangeVideo.bind(null, item)}>
        <CourseLessonItemLinkIcon
          isViewed={isViewed}
          inProgress={inProgress}
          isDisabled={isDisabled}
        >
          <img
            src={
              isViewed
                ? itemCheckedIcon
                : inProgress
                ? itemPlayIcon
                : itemPlayIcon
            }
            alt=''
            width='12'
            height='12'
          />
        </CourseLessonItemLinkIcon>
        <CourseLessonItemLinkContent>
          <CourseLessonItemLinkLessonCount inProgress={inProgress}>
            {lessonSequence} - dars
          </CourseLessonItemLinkLessonCount>
          <CourseLessonItemLinkLessonHeading inProgress={inProgress}>
            {item.title}
          </CourseLessonItemLinkLessonHeading>
        </CourseLessonItemLinkContent>
      </CourseLessonItemLink>
    </CourseLessonItem>
  );
};
