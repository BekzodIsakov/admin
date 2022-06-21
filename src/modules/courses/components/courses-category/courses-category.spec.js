import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';

import { CoursesCategory } from './courses-category.component';

const setup = ({ title, children }) => {
  return customRender(<CoursesCategory title={title} children={children} />);
};

test('Course category component', () => {
  const { asFragment } = setup({ title: 'title', children: 'children' });
  expect(asFragment).toMatchSnapshot();
});

test('Course category props test', () => {
  setup({ title: 'title', children: 'children' });
  const courseCategoryTitle = screen.getByRole('heading', { name: 'title' });
  expect(courseCategoryTitle).toBeTruthy();
});
