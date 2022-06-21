/**
 * <CourseAdditionalGuid /> props
 */

import { useSelector } from 'react-redux';

export const useCourseAdditionalGuidProps = _ => {
  const additionalFiles = useSelector(
    state => state.courses?.activeLesson?.resources
  );

  const filterOptions = [{ label: 'fayl turi', value: 'type-file' }];

  return {
    filterOptions,
    additionalFiles
  };
};
