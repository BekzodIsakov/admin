import { useState, useRef, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  authActions,
  useAuthError,
  useAuthLoading,
  useAuthUserFound
} from '@auth/store';
import { useProfileSelector } from '@store/common';
import { parseQueryToString } from '@utils/get-query';

const initialValues = {
  phone: '',
  name: '',
  code: ''
};

const milliseconds = 2 * 60 * 1000;
const getTime = () => Date.now() + milliseconds;

const phoneValidationError = 'Telefon raqamingizni kiriting';
const codeValidationError = "Tasdiqlash raqamini to'g'ri kiriting";
const codeIsRequired = 'Tasdiqlash raqamini kiriting';
const nameIsRequired = 'Ismingizni kiriting';

const authLoginSchema = Yup.object().shape({
  phone: Yup.string()
    .min(9, phoneValidationError)
    .max(9, phoneValidationError)
    .required(phoneValidationError)
});

const authConfirmSchema = Yup.object().shape({
  phone: Yup.string()
    .min(9, phoneValidationError)
    .max(9, phoneValidationError)
    .required(phoneValidationError),
  code: Yup.string()
    .min(6, codeValidationError)
    .max(6, codeValidationError)
    .required(codeIsRequired)
});

const authRegisterSchema = Yup.object().shape({
  name: Yup.string().required(nameIsRequired),
  phone: Yup.string()
    .min(9, phoneValidationError)
    .max(9, phoneValidationError)
    .required(phoneValidationError),
  code: Yup.string()
    .min(6, codeValidationError)
    .max(6, codeValidationError)
    .required(codeIsRequired)
});

const INVALID_ARGUMENT = 'INVALID_ARGUMENT';

export const useLoginProps = () => {
  const dispatch = useDispatch();
  const [editPhone, setEditPhone] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [timeIndex, setTimeIndex] = useState(0);
  const profile = useProfileSelector();
  const isUserFound = useAuthUserFound();
  const loading = useAuthLoading();
  const error = useAuthError();
  const [isCodeSended, setIsCodeSended] = useState(false);
  const countRef = useRef();
  const phoneRef = useRef();
  const location = useLocation();

  const search = useMemo(() => {
    return parseQueryToString(location.search);
  }, [location.search]);

  const form = useFormik({
    // enableReinitialize: true,
    initialValues,
    validationSchema: isCodeSended
      ? isUserFound
        ? authConfirmSchema
        : authRegisterSchema
      : authLoginSchema,
    validateOnChange: false,
    onSubmit: values => {
      const $values = { ...values, phone: `+998${values.phone}` };
      if (!isCodeSended) {
        handleLogin($values);
        setEditPhone(true);
      } else if (isUserFound) {
        handleConfirm($values);
      } else {
        handleRegister($values);
      }
    }
  });

  const handleEditPhone = e => {
    e.preventDefault();
    setEditPhone(false);
    phoneRef.current.focus();
  };

  const handleResendCode = (isEdit, e) => {
    e.preventDefault();
    if (!isEdit && !countRef.current.isCompleted()) {
      return;
    }

    const $values = { ...form.values, phone: `+998${form.values.phone}` };
    dispatch(
      authActions.login({
        phone: $values.phone,
        callback: () => {
          setEditPhone(true);
          setTime(getTime());
          setTimeIndex(timeIndex + 1);
          countRef.current.start();
        }
      })
    );
  };

  const redirect = () => {
    if (search.redirect_outside) {
      window.location.href = search.redirect_outside;
    }
  };

  const handleConfirm = ({ phone, code }) => {
    dispatch(
      authActions.confirm({
        data: {
          phone,
          code
        },
        callback: redirect
      })
    );
  };

  const handleRegister = ({ phone, code, name }) => {
    dispatch(
      authActions.register({
        data: {
          phone,
          code,
          name
        },
        callback: redirect
      })
    );
  };

  const handleLogin = ({ phone }) => {
    dispatch(
      authActions.login({
        phone,
        callback: () => {
          setIsCodeSended(true);
          setTime(getTime());
          setTimeIndex(timeIndex + 1);
          countRef.current.start();
        }
      })
    );
  };

  const handleBack = () => {
    setEditPhone(false);
    setIsCodeSended(false);
    form.setFieldValue('code', '');
    form.setFieldValue('name', '');
  };

  useEffect(() => {
    if (error && error?.body?.error === INVALID_ARGUMENT) {
      form.setFieldError('code', 'Kod eskirgan yoki xato kiritilgan');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    form,
    isUserFound,
    isCodeSended,
    loading,
    editPhone,
    handleEditPhone,
    handleResendCode,
    countRef,
    phoneRef,
    time,
    timeIndex,
    handleBack,
    profile,
    error
  };
};
