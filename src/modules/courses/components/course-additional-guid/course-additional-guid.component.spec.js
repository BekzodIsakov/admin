import { customRender } from '@test-utils/helpers';
// import { screen } from "@testing-library/react";

import { CourseAdditionalGuid } from './course-additional-guid.component';

const setup = () => {
  return customRender(<CourseAdditionalGuid />);
};

test('Course additional guide test', () => {
  const { asFragment } = setup({});
  expect(asFragment).toMatchSnapshot();
});
