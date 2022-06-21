import React from 'react';
import { hoc } from '@utils/hoc';
import { useAlertProps } from './alert.props';
import { AlertContainer } from './alert.style';

/**
 * <Alert />
 */
export const Alert = hoc(useAlertProps, ({ children, ...props }) => (
  <AlertContainer data-testid='alert-container' {...props}>
    {children}
  </AlertContainer>
));
