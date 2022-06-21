import React, { useState } from 'react';
import { hoc } from '@utils/hoc';
import { Button } from '@components/atoms';
import { BlurredTextContainer } from './blurred-text.styles';

const useBlurredTextProps = () => {};

export const BlurredText = hoc(
  useBlurredTextProps,
  ({ children }) => {
    const [isBlurred, setIsBlurred] = useState(true);

    return (
      <BlurredTextContainer
        isBlurred={isBlurred}
        data-testid='blurred-text-component'
      >
        <span>{children}</span>
        {isBlurred && (
          <Button
            iconName={'eye-icon'}
            iconColor='#ba8d5b'
            size='large'
            onClick={() => setIsBlurred(false)}
          />
        )}
      </BlurredTextContainer>
    );
  },
  'Blurred'
);
