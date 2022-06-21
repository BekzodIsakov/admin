import { SvgIcon } from '@components/atoms/index';
import { FlexWrapper } from '@components/layouts/flex-wrapper/flex-wrapper.component';
import { secondsFormat } from '@utils/date-format-time';
import { hoc } from '@utils/hoc';
import React from 'react';
import { useMemo } from 'react';
import { StyledDetails, Title, Description } from './details.styles';

const useDetailsProps = ({ seconds }) => {
  const time = useMemo(() => secondsFormat(seconds), [seconds]);

  return {
    time
  };
};

export const Details = hoc(useDetailsProps, ({ title, description, time }) => {
  return (
    <StyledDetails>
      <Title>{title}</Title>
      <Description
        dangerouslySetInnerHTML={{ __html: description }}
      ></Description>
      <FlexWrapper align='center' gap='1.1rem'>
        <SvgIcon iconName='play-icon' iconColor='black' size='1.4rem' />

        <p>
          <span>{time}</span>&nbsp;daqiqadan davom ettirish
        </p>
      </FlexWrapper>
    </StyledDetails>
  );
});
