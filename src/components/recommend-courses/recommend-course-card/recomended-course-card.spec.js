import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';

import { RecommendCourseCard } from './recommend-course-card.component';

const setup = ({ cardTitle, cardText, cardToLink, cardImg }) => {
  return customRender(
    <RecommendCourseCard
      cardTitle={cardTitle}
      cardText={cardText}
      cardToLink={cardToLink}
      cardImg={cardImg}
    />
  );
};

test('Recomended course test props', () => {
  const { asFragment } = setup({
    cardTitle: 'cardTitle',
    cardText: 'cardText',
    cardImg: 'cardImg'
  });
  expect(asFragment).toMatchSnapshot();
});

test('render recomended course cards', () => {
  setup({ cardTitle: 'cardTitle', cardText: 'cardText', cardToLink: '/link' });
  const recomendedCoursesTitle = screen.getByRole('heading', {
    name: 'cardTitle'
  });
  const recommendedCoursesText = screen.getByTestId('recommended-course-text');
  const recommendedCourseLink = screen.getByTestId('recommended-courseLink');
  expect(
    recomendedCoursesTitle && recommendedCoursesText && recommendedCourseLink
  ).toBeTruthy();
});
