import React from 'react';
import { UserImg, Button } from '@components/atoms/index';

import profile_img from '../../../../../../assets/img/profile_img.png';
import {
  ButtonInputWrapper,
  EditableUserImgContainer,
  ImageFileInput
} from './editable-user-img.styles';
import { hoc } from '@utils/hoc';
import { useEditableUserImg } from './editable-user-img.props';

export const EditableUserImg = hoc(
  useEditableUserImg,
  ({ imageUrl, inputRef, handleOpenImage, handleChangeFile }) => {
    return (
      <EditableUserImgContainer>
        <UserImg src={imageUrl || profile_img} size='large' />

        <ButtonInputWrapper>
          <Button
            onClick={handleOpenImage}
            buttonType='roundButton'
            iconName='pen-icon'
            size='middle'
          />
          <ImageFileInput
            ref={inputRef}
            type='file'
            name='user_image'
            id='user_image'
            accept='image/png, image/jpg, image/jpeg'
            onChange={handleChangeFile}
            data-test-id='user-img'
          />
        </ButtonInputWrapper>
      </EditableUserImgContainer>
    );
  }
);
