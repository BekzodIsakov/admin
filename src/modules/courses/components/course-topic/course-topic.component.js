import React from 'react';
import { hoc } from '@utils/hoc';
import { useCourseTopicProps } from './course-topic.props';
import {
  CourseTopicContainer,
  CourseTopicDescription
} from './course-topic.style';
import { Heading } from '@components/atoms';
import { Space } from '@components/space';

/**
 * <CourseTopic />
 */
const CourseTopic = hoc(useCourseTopicProps, ({ lesson }) => (
  <CourseTopicContainer>
    <Heading variant='h1' color='black'>
      {lesson?.title}
    </Heading>
    <Space space='12px' />
    <CourseTopicDescription
      dangerouslySetInnerHTML={{ __html: lesson?.body }}
      data-testid='course-topic'
    ></CourseTopicDescription>
  </CourseTopicContainer>
));

export { CourseTopic };
