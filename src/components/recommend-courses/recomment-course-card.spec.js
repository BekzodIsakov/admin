import { screen } from '@testing-library/react';
import { RecommendCourses } from './index';
import { customRender } from '@test-utils/helpers';

const items = [
  {
    title: {
      uz: 'Test'
    },
    picture: {
      url: ''
    },
    description: {
      uz: ''
    },
    slug: ''
  }
];

describe('recommend-courses-component', () => {
  test('render empty component', () => {
    const { asFragment } = customRender(
      <RecommendCourses
        recommendedCourses={undefined}
        data-testid='recommend-course'
      />
    );

    const ancestor = screen.queryByTestId('recommend-course');
    const descendant = screen.getByRole('heading', {
      level: 3,
      name: /Hozircha hech qanday tavsiya qilinadigan kurslar yoq/i
    });

    expect(asFragment()).toMatchSnapshot();
    expect(ancestor).toContainElement(descendant);
  });

  test('render component with items', () => {
    const { asFragment } = customRender(
      <RecommendCourses
        recommendedCourses={items}
        data-testid='recommend-course'
      />
    );

    const ancestor = screen.queryByTestId('recommend-course');
    const descendant = screen.getByText(items[0].title.uz);

    expect(asFragment()).toMatchSnapshot();
    expect(ancestor).not.toHaveTextContent(
      /Hozircha hech qanday tavsiya qilinadigan kurslar yoq/i
    );
    expect(ancestor).toContainElement(descendant);
  });
});
