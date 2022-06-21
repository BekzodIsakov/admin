/* <LastNews /> */

import { dateFormatByMonth } from '@utils/date-format';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { commonActions } from 'src/store/common/common.slice';

export const useNewsLastProps = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector(state => state.common.latestNews);

  const day = useMemo(() => {
    if (!latestNews) return '';
    const date = new Date(latestNews.created_at);
    return dateFormatByMonth(date);
  }, [latestNews]);

  useEffect(() => {
    dispatch(commonActions.fetchLatestNews());
  }, [dispatch]);

  return {
    latestNews,
    day
  };
};
