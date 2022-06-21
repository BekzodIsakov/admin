import React, { useEffect, useMemo, useState } from 'react';
import { hoc } from '@utils/hoc';
import * as Yup from 'yup';
import { InputWrapper, SettingsFormContainer } from './settings-form.styles';
import { ThemeForm } from '@components/form/form.component';
import { FormLabel } from '@auth/routes/login/login.component.styles';
import { useFormik } from 'formik';
import { Field } from '@components/field/field.component';
import { Button } from './settings-form.styles';
import { useProfileSelector } from '@store/common';
import { UserProfile } from '../user-profile';
import { dateFormat } from '@utils/date-format';
import { Alert } from '@components/atoms/alert';
import { useDispatch } from 'react-redux';
import { settingsActions } from '@settings/store';
import { useSelector } from 'react-redux';
import { BIRTH_DATE_FORMAT } from '@components/atoms/Input/input.props';

const settingSchema = Yup.object().shape({
  name: Yup.string().required('Ismni toldirish majburiy'),
  gender: Yup.string().required('Jinsni belgilash majburiy')
});

const initialValues = {
  name: '',
  last_name: '',
  imageUrl: '',
  phone: '',
  email: '',
  born_date: ''
};

const useSettingsFormProps = () => {
  const profile = useProfileSelector();
  const [dateType, setDateType] = useState('text');
  const [alert, setAlert] = useState(false);
  const file = useSelector(state => state.settings.file);
  const loading = useSelector(state => state.settings.loading);
  const dispatch = useDispatch();

  const date = useMemo(
    () =>
      dateFormat(new Date(profile.created_at.split(' ').slice(0, 2).join(' '))),
    [profile.created_at]
  );

  const onSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('file', file);
    setSubmitting(true);
    dispatch(
      settingsActions.updateSetting({
        data: values,
        file: file && formData,
        callback: () => {
          setAlert(true);

          // setTimeout(() => {
          //   setAlert(false);
          // }, 50000);
        }
      })
    );
  };

  const form = useFormik({
    initialValues,
    validationSchema: settingSchema,
    validateOnChange: false,
    onSubmit: onSubmit
    // enableReinitialize: true
  });

  const dateFocus = () => {
    setDateType('date');
  };

  const dateBlur = () => {
    setDateType('text');
  };
  console.log({ form });

  useEffect(() => {
    if (profile) {
      form.setValues({
        phone: profile.phone?.slice(-9),
        name: profile.name || '',
        gender: profile.gender || '',
        last_name: profile.last_name || '',
        imageUrl:
          profile.image?.url ||
          'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
        email: profile.email || '',
        born_date: profile.born_date || ''
      });
    }
    return () => console.log('unmount');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return {
    form,
    profile,
    date,
    dateFocus,
    dateBlur,
    dateType,
    loading,
    alert
  };
};

export const SettingsForm = hoc(
  useSettingsFormProps,
  ({ form, profile, date, dateFocus, dateBlur, dateType, loading, alert }) => (
    <ThemeForm use={form}>
      <UserProfile userFullName={profile.name} date={date} />
      <SettingsFormContainer>
        <div className='inner-wrapper'>
          <InputWrapper>
            <FormLabel>Ismingiz</FormLabel>
            <Field.Input data-testid='user-name' type='text' name='name' />
          </InputWrapper>
          <InputWrapper>
            <FormLabel>Familiyangiz</FormLabel>
            <Field.Input
              data-testid='user-surname'
              type='text'
              name='last_name'
            />
          </InputWrapper>
          <InputWrapper>
            <FormLabel>Jinsingiz</FormLabel>
            <Field.Select
              name='gender'
              data-testid='user-gender'
              options={[
                { value: 'male', label: 'Erkak' },
                { value: 'female', label: 'Ayol' }
              ]}
              placeholder='Jinsingizni tanlang'
            />
          </InputWrapper>

          <InputWrapper>
            <FormLabel>Tug'ilgan sanangiz</FormLabel>
            <Field.Input
              // type={dateType}
              // onFocus={dateFocus}
              // onBlur={dateBlur}
              type='date'
              name='born_date'
              data-testid='user-borndate'
              min='1900-01-01'
              max='2022-01-01'
              format={BIRTH_DATE_FORMAT}
            />
          </InputWrapper>
          <InputWrapper>
            <FormLabel>Elektron pochtangiz</FormLabel>
            <Field.Input type='email' name='email' data-testid='user-email' />
          </InputWrapper>
          <InputWrapper>
            <FormLabel>Telefon raqamingiz</FormLabel>
            <Field.Input
              data-testid='user-phone'
              readOnly
              prefix='+998'
              type='number'
              name='phone'
            />
          </InputWrapper>
        </div>
        {form.errors &&
          Object.keys(form.errors).map(key => (
            <Alert key={key} variant='danger'>
              {form.errors[key]}
            </Alert>
          ))}
        {alert && <Alert variant='success'>Ma'lumotlaringiz yangilandi</Alert>}
        <Button
          disabled={loading}
          type='submit'
          buttonType='button'
          size='large'
          data-testid='user-sub'
        >
          O’zgarishlarni saqlash
        </Button>
      </SettingsFormContainer>
    </ThemeForm>
  ),
  'SettingsForm'
);
