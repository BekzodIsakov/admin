import { authActions } from '@auth/store';
import { useDispatch } from 'react-redux';
import { storageService } from '@services/storage.service';
import { commonActions } from '@store/common';
import React, { useState } from 'react';
import { SidebarNavLink } from '../sidebar/left-sidebar/sidebar-nav-link';
import { StyledBottomNav, ModalTitle, ModalButton } from './bottom-nav.styles';
import { useHistory } from 'react-router-dom';
import { Button } from '@components/atoms';
import { UnModal } from '@components/confirm-modal/confirm-modal.component';
import { FlexWrapper } from '@components/layouts/flex-wrapper';

export const BottomNav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);

  // eslint-disable-next-line no-unused-vars
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

  const handleToggleConfirmModal = () => {
    setModalState(!modalState);
  };

  return (
    <StyledBottomNav>
      <ul>
        <SidebarNavLink to='/dashboard' iconName={'home-icon'} />
        <SidebarNavLink to='/courses' iconName={'react-icon'} />
        <SidebarNavLink to='/payments' iconName={'tab-icon'} />
        <SidebarNavLink to='/settings' iconName={'settings-icon'} />
        <Button
          onClick={handleToggleConfirmModal}
          iconName='exit-icon'
          iconColor={'#bfbfbf'}
        />
      </ul>

      <UnModal
        modal={modalState}
        setModal={setModalState}
        modalTitle='Platformadan chiqish'
        simple={true}
      >
        <ModalTitle>
          Siz haqiqatdan ham Platformadan chiqmoqchimisiz?
        </ModalTitle>

        <FlexWrapper
          align='flex-start'
          justify='flex-end'
          // direction="column"
        >
          <ModalButton onClick={handleToggleConfirmModal}>Yo'q</ModalButton>

          <ModalButton danger='danger' onClick={handleLogout}>
            Platformadan chiqish
          </ModalButton>
        </FlexWrapper>
      </UnModal>
    </StyledBottomNav>
  );
};
