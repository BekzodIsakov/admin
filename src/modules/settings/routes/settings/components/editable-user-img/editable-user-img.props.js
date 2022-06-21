import { settingsActions } from '@settings/store';
import { useFormikContext } from 'formik';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export const useEditableUserImg = () => {
  const { values, setFieldValue } = useFormikContext();
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleOpenImage = () => {
    inputRef.current?.click();
  };

  const handleChangeFile = e => {
    const file = e.target.files[0];
    dispatch(settingsActions.setFile(file));
    const reader = new FileReader();

    reader.onload = read => {
      setFieldValue('imageUrl', read.target.result);
    };

    reader.readAsDataURL(file);
  };

  return {
    imageUrl: values.imageUrl,
    inputRef,
    handleOpenImage,
    handleChangeFile
  };
};
