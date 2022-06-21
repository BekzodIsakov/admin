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

const useRecommendCoursesProps = () => {
  const dispatch = useDispatch();

  const recommendedCourses = useSelector(
    state => state.common.recommendedCourses
  );

  useEffect(() => {
    dispatch(commonActions.fetchRecommendedCourses());
  }, [dispatch]);
  // console.log(recommendedCourses, 'recomeneded nakrutka');
  return {
    recommendedCourses
  };
};

export const RecommendCourses = hoc(
  useRecommendCoursesProps,
  ({ recommendedCourses, ...rest }) => {
    return (
      <RecommendedCourse {...rest}>
        <RecommendedCourseTitle>Sizga tavsiya qilamiz</RecommendedCourseTitle>
        <RecommendCoursesWrapper>
          <RecommendCourseHolder>
            <RecommendCourseCards>
              {recommendedCourses && recommendedCourses.length > 0 ? (
                recommendedCourses
                  ?.slice(0, 3)
                  ?.map((item, index) => (
                    <RecommendCourseCard
                      key={index}
                      cardTitle={item?.title?.uz}
                      cardImg={item.picture?.url}
                      cardText={item.description?.uz}
                      cardToLink={item.slug}
                    />
                  ))
              ) : (
                <h3>Hozircha hech qanday tavsiya qilinadigan kurslar yoq</h3>
              )}
            </RecommendCourseCards>
          </RecommendCourseHolder>
        </RecommendCoursesWrapper>
      </RecommendedCourse>
    );
  }
);
