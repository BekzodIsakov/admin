import { hoc } from '@utils/hoc';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from 'src/store/common/common.slice';
import {
  RecommendCoursesWrapper,
  RecommendedCourseTitle,
  RecommendCourseCards,
  RecommendCourseHolder,
  RecommendedCourse
} from './recommend-courses.style';

import { RecommendCourseCard } from './recommend-course-card';

const useRecommendCoursesProps = () => {};

export const RecommendCourses = hoc(useRecommendCoursesProps, ({ ...rest }) => {
  return (
    <RecommendedCourse {...rest}>
      <RecommendedCourseTitle>Sizga tavsiya qilamiz</RecommendedCourseTitle>
      <RecommendCoursesWrapper>
        <RecommendCourseHolder>
          <RecommendCourseCards>
            <RecommendCourseCard
              key={1}
              cardTitle={'card title'}
              cardImg={''}
              cardText={'card text'}
              cardToLink={''}
            />
          </RecommendCourseCards>
        </RecommendCourseHolder>
      </RecommendCoursesWrapper>
    </RecommendedCourse>
  );
});
