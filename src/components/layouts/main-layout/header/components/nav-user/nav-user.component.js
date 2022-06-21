import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Heading, SvgIcon, UserImg } from '@components/atoms';
import { FlexWrapper } from '@components/layouts/flex-wrapper';
import { useTheme } from 'styled-components';
import { ProfileMenu, ProfileMenuItem, StyledUser } from './nav-user.style';
import { UnModal } from '@components/confirm-modal/confirm-modal.component';
import {
  ModalButton,
  ModalTitle
} from '@components/layouts/main-layout/bottom-nav/bottom-nav.styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storageService } from '@services/storage.service';
import { authActions } from '@auth/store';
import { commonActions } from '@store/common';

const NavUser = ({ userImg, userName, userStatus }) => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    storageService.removeRefreshToken();
    storageService.removeAccessToken();
    storageService.deleteCookie('shared_token');
    dispatch(authActions.logout());
    dispatch(commonActions.removeProfile());

    dispatch(
      commonActions.fetchCategoriesFulfilled({
        categories: [],
        courses: []
      })
    );
    history.push('/login');
  };

  const handleToggleConfirmModal = () => setModalState(!modalState);

  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <StyledUser onClick={toggleCollapse}>
      <FlexWrapper gap='1.6rem'>
        <UserImg src={userImg} alt={userName} />
        <FlexWrapper direction='column' gap='0.2rem'>
          <Heading variant='h5'>{userName}</Heading>
          <Heading variant='h6' color={theme.colors.gray}>
            {userStatus}
          </Heading>
        </FlexWrapper>
      </FlexWrapper>
      {collapse && (
        <ProfileMenu>
          <ProfileMenuItem to='/settings'>
            <SvgIcon iconName='settings-icon' iconColor={'#bfbfbf'} />
            Sozlamalar
          </ProfileMenuItem>
          <ProfileMenuItem onClick={handleToggleConfirmModal}>
            <SvgIcon iconName='exit-icon' iconColor={'#bfbfbf'} />
            Chiqish
          </ProfileMenuItem>
        </ProfileMenu>
      )}

      <UnModal
        modal={modalState}
        onClose={handleToggleConfirmModal}
        modalTitle='Platformadan chiqish'
        simple
      >
        <ModalTitle>Siz haqiqatan ham Platformadan chiqmoqchimisiz?</ModalTitle>

        <FlexWrapper justify='flex-end' align='center'>
          <ModalButton onClick={handleToggleConfirmModal}>Yo'q</ModalButton>

          <ModalButton danger='danger' onClick={handleLogout}>
            Ha
          </ModalButton>
        </FlexWrapper>
      </UnModal>
    </StyledUser>
  );
};

NavUser.propTypes = {
  userImg: PropTypes.any,
  userName: PropTypes.string,
  userStatus: PropTypes.string
};

export { NavUser };
