import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';

import { CourseTopic } from './course-topic.component';

const setup = ({ lessonTitle }) => {
  return customRender(<CourseTopic lessonTitle={lessonTitle} />);
};

test('Course topic', () => {
  const { asFragment } = setup({ lessonTitle: 'About + someText' });
  expect(asFragment).toMatchSnapshot();
});

test('course topic props', () => {
  setup({ lessonTitle: 'About + someText' });
  const courseTopic = screen.getByTestId('course-topic');
  expect(courseTopic).toBeTruthy();
});
