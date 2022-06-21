import { hoc } from '@utils/hoc';

import { Title, Wrapper, CardsGrid } from './courses-category.style';

const useCoursesCategoryProps = () => {};

export const CoursesCategory = hoc(
  useCoursesCategoryProps,

  ({ title = 'Title', children }) => {
    return (
      <Wrapper>
        <Title role='heading'>{title}</Title>

        <CardsGrid>{children}</CardsGrid>
      </Wrapper>
    );
  },

  'CoursesCategory'
);
