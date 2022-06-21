import React from 'react';
import { EditableUserImg } from '../editable-user-img/editable-user-img.component';
import {
  UserProfileContainer,
  UserFullName,
  RegistrationDate
} from './user-profile.styles';

export const UserProfile = ({ userFullName, date }) => {
  return (
    <div>
      <UserProfileContainer direction='column' align='center' userFullName=''>
        <EditableUserImg />
        <UserFullName>{userFullName}</UserFullName>
        <RegistrationDate>Ro’yxatdan o’tilgan sana: {date}</RegistrationDate>
      </UserProfileContainer>
    </div>
  );
};
