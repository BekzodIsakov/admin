import React from 'react';
import { hoc } from '@utils/hoc';
import { useCourseVideoProps } from './course-video.props';
import { CourseVideoContainer } from './course-video.style';
import { ShakaPlayer } from '@components/shaka-player/shaka-player.component';
/**
 * <CourseVideo />
 */
export const CourseVideo = hoc(
  useCourseVideoProps,
  ({ watermark, lesson, prev, next, src }) => {
    return (
      <CourseVideoContainer>
        <ShakaPlayer watermark={watermark} src={src} prev={prev} next={next} />
      </CourseVideoContainer>
    );
  }
);
