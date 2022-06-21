import React from 'react';
import { useTheme } from 'styled-components';
import { StyledNotification } from './notification-icon.style';
import { Button } from '@components/atoms';

const NotificationIcon = ({ hasNotification, onClick }) => {
  let theme = useTheme();

  return (
    <StyledNotification onClick={onClick} hasNotification={hasNotification}>
      <Button iconName='bell-icon' iconColor={theme.colors.gray} size='large' />
      <span></span>
    </StyledNotification>
  );
};

export { NotificationIcon };
