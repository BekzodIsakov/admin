import { hoc } from '@utils/hoc';
import Countdown, { zeroPad } from 'react-countdown';

import {
  ActiveBannerCard,
  ActiveBannerTitle,
  ActiveBannerSubtitle,
  ActiveBannerTime,
  ActiveBannerLink
} from './active-banner.style';
import { BlurredText } from './components';

const useActiveBannerProps = () => {};

export const ActiveBanner = hoc(useActiveBannerProps, () => {
  return (
    <ActiveBannerCard>
      <ActiveBannerTitle data-testid='active-banner-title' role='heading'>
        {''}
      </ActiveBannerTitle>

      <ActiveBannerSubtitle data-testid='active-banner-subtitle' role='heading'>
        Tugash vaqti: {''}
      </ActiveBannerSubtitle>

      <Countdown
        date={''}
        key={''}
        renderer={props => {
          return (
            <ActiveBannerTime>
              {props.days} kun {zeroPad(props.hours)}:{zeroPad(props.minutes)}:
              {zeroPad(props.seconds)}
            </ActiveBannerTime>
          );
        }}
      />

      <ActiveBannerLink>
        <BlurredText>ac17b1a</BlurredText>
      </ActiveBannerLink>
    </ActiveBannerCard>
  );
});
