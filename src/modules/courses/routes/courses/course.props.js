import { commonActions } from '@store/common';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useCoursesProps = () => {
  const categories = useSelector(state => state.common.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.fetchCategories());
  }, [dispatch]);

  return { categories };
};
