import React from 'react';

import { StyledHeader } from './header.styles';

import { NavUser } from '../../main-layout/header/components/nav-user';
import { NotificationIcon } from './components/notification-icon';
import { MainLogo } from '@components/atoms';
import { FlexWrapper } from '@components/layouts/flex-wrapper';
import { NavLink } from 'react-router-dom';
import { hoc } from '@utils/hoc';
import { useProfileSelector } from '@store/common';

const useHeaderProps = () => {
  const profile = useProfileSelector();

  return {
    profile
  };
};

const Header = hoc(useHeaderProps, ({ profile }) => {
  return (
    <StyledHeader>
      <MainLogo />
      <FlexWrapper gap='3.6rem' align='center'>
        <NavLink to='/notifications'>
          <NotificationIcon hasNotification={1} />
        </NavLink>
        <NavUser
          userImg={profile?.image.url}
          userName={profile?.name}
          userStatus={'O‘quvchi'}
        />
      </FlexWrapper>
    </StyledHeader>
  );
});

export { Header };
