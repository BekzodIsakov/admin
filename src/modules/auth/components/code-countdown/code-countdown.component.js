import React from 'react';
import { hoc } from '@utils/hoc';
import Countdown from 'react-countdown';
import { useCodeCountdownProps } from './code-countdown.props';

/**
 * <CodeCountdown />
 */
export const CodeCountdown = hoc(
  useCodeCountdownProps,
  ({ children, countRef, time, timeIndex }) => (
    <Countdown
      ref={countRef}
      key={timeIndex}
      date={time}
      renderer={({ minutes, seconds, completed }) => {
        if (completed) {
          return children;
        } else {
          seconds = seconds < 10 ? '0' + seconds : seconds;
          return (
            <>
              {minutes}:{seconds}
            </>
          );
        }
      }}
    />
  )
);
