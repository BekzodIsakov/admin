import React from 'react';
import { hoc } from '@utils/hoc';

import { Button } from '@components/atoms/index';
import { Wrapper, Heading, Description } from './not-found.style';
import { config } from 'src/config';

const useCoursesNotFound = () => {};
export const CoursesNotFound = hoc(useCoursesNotFound, () => (
  <Wrapper>
    <Heading>Sizda kurslar yo'q, Nimadan boshlashni bilmayapsizmi?</Heading>
    <Description>
      Dunyoda ilmdan boshqa najot yo'q va bo'lmagay. <br />
      -Imom Buxoriy
    </Description>
    <Button
      buttonType='button'
      iconName='arrow_right-icon'
      style={{ backgroundColor: '#7AD111' }}
      $stroke
      onClick={() => (window.location.href = `${config.landingUrl}/courses`)}
    >
      Kursni tanlang
    </Button>
  </Wrapper>
));
