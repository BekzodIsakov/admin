import { dashboardActions } from '@dashboard/store';
import { dateFormat } from '@utils/date-format';
import { hoc } from '@utils/hoc';
import { checkIsMobile } from '@utils/isMobile';
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StudentResultStatistics } from './student-result-statistics/student-result-statistics.component';

import {
  StudentResultWrapper,
  StudentResultTitle,
  StudentResultHolder,
  StudentResultMobileNavbar,
  StudentResultMobileNav
} from './student-result.style';

const useStudentResultProps = () => {
  const [activeStat, setActiveStat] = useState(null);
  const isMobile = useMemo(() => checkIsMobile(), []);
  const statistics = useSelector(state => state.dashboard.taskStatistics);
  const dispatch = useDispatch();

  const normalDates = dates => {
    return dates?.map(date => dateFormat(new Date(date)));
  };

  const handleChangeStat = item => {
    setActiveStat(item);
  };

  useEffect(() => {
    dispatch(dashboardActions.fetchTaskStatistics());
  }, [dispatch]);

  return {
    isMobile,
    statistics,
    normalDates,
    activeStat,
    handleChangeStat
  };
};

export const StudentResult = hoc(
  useStudentResultProps,
  ({ isMobile, statistics, normalDates, activeStat, handleChangeStat }) => {
    if (statistics?.length === 0) {
      return null;
    }

    return (
      <StudentResultWrapper>
        <StudentResultHolder>
          {isMobile ? (
            <>
              <StudentResultMobileNavbar>
                <StudentResultTitle>
                  Sizning vazifalaringizni statistikasi
                </StudentResultTitle>
                {statistics?.map((item, idx) => (
                  <StudentResultMobileNav
                    key={item?.course_title?.uz + idx}
                    active={
                      item?.course_title?.uz === activeStat?.course_title?.uz
                    }
                    onClick={handleChangeStat.bind(null, item)}
                  >
                    {item?.course_title?.uz}
                  </StudentResultMobileNav>
                ))}
              </StudentResultMobileNavbar>

              <StudentResultStatistics
                courseTitle={activeStat?.course_title?.uz}
                average={activeStat?.average}
                lastStatistics='+35%'
                countLessons={normalDates(activeStat?.created_at)}
                rating={activeStat?.rates}
                color={activeStat?.category?.color}
                height={200}
              />
            </>
          ) : (
            <>
              <StudentResultTitle>
                Sizning vazifalaringizni statistikasi
              </StudentResultTitle>
              {statistics?.map(statistic => (
                <StudentResultStatistics
                  key={statistic.id}
                  courseTitle={statistic?.course_title?.uz}
                  average={statistic?.average}
                  lastStatistics='+35%'
                  countLessons={normalDates(statistic?.created_at)}
                  rating={statistic?.rates}
                  color={statistic?.category?.color}
                />
              ))}
            </>
          )}
        </StudentResultHolder>
      </StudentResultWrapper>
    );
  },
  'StudentResult'
);
