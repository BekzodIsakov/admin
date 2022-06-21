import { useEffect, useMemo, useState } from 'react';
import { hoc } from '@utils/hoc';
import { useDispatch, useSelector } from 'react-redux';
import Countdown, { zeroPad } from 'react-countdown';

import {
  ActiveBannerCard,
  ActiveBannerTitle,
  ActiveBannerSubtitle,
  ActiveBannerTime,
  ActiveBannerLink
} from './active-banner.style';
import { commonActions } from 'src/store/common/common.slice';
import { dateFormat } from '@utils/date-format';
import { BlurredText } from './components';

const useActiveBannerProps = () => {
  const [timeIndex, setTimeIndex] = useState(0);
  const coursePromoTimer = useSelector(state => state.common.promoCourses);

  const dispatch = useDispatch();

  const deadlineDate = useMemo(() => {
    if (!coursePromoTimer) return { iso: '', time: Date.now() };
    const date = new Date(parseInt(coursePromoTimer?.deadline) * 1000);
    setTimeIndex(timeIndex + 1);
    return {
      iso: dateFormat(date),
      time: date.getTime()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursePromoTimer]);

  useEffect(() => {
    dispatch(commonActions.fetchPromoCourses());
  }, [dispatch]);

  return {
    coursePromoTimer,
    deadlineDate,
    timeIndex
  };
};

export const ActiveBanner = hoc(
  useActiveBannerProps,
  ({ coursePromoTimer, deadlineDate, timeIndex, promocode }) => {
    if (!coursePromoTimer) {
      return null;
    }

    return (
      <ActiveBannerCard>
        <ActiveBannerTitle data-testid='active-banner-title' role='heading'>
          {coursePromoTimer?.title}
        </ActiveBannerTitle>

        <ActiveBannerSubtitle
          data-testid='active-banner-subtitle'
          role='heading'
        >
          Tugash vaqti: {deadlineDate.iso}
        </ActiveBannerSubtitle>

        <Countdown
          date={deadlineDate.time}
          key={timeIndex}
          renderer={props => {
            return (
              <ActiveBannerTime>
                {props.days} kun {zeroPad(props.hours)}:{zeroPad(props.minutes)}
                :{zeroPad(props.seconds)}
              </ActiveBannerTime>
            );
          }}
        />

        <ActiveBannerLink>
          <BlurredText>{coursePromoTimer?.serial || 'ac17b1a'}</BlurredText>
        </ActiveBannerLink>
      </ActiveBannerCard>
    );
  }
);
