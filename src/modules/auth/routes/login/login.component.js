import { hoc } from '@utils/hoc';
import { AuthLayout } from '@auth/components';
import { useLoginProps } from './login.props';
import { ThemeForm } from '@components/form';
import { Field } from '@components/field/field.component';
import {
  FormConditionDesc,
  FormConditionLink,
  FormContainer,
  FormDescription,
  FormControl,
  FormGroupBottom,
  FormGroupTop,
  FormLabel,
  FormTitle
} from './login.component.styles';
import { Button, SvgIcon } from '@components/atoms/index';
import { Link, Redirect } from 'react-router-dom';
import { CodeCountdown } from '@auth/components/code-countdown/code-countdown.component';
import { Alert } from '@components/atoms/alert';
import { config } from '@config/config';

const privacyPolicyLink = () =>
  (window.location.href = `${config.landingUrl}/privacy-policy`);

export const Login = hoc(
  useLoginProps,
  ({
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
    profile
  }) => {
    if (profile) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <AuthLayout hideBackButton={!isCodeSended} onBack={handleBack}>
        <FormContainer>
          <ThemeForm use={form}>
            <FormGroupTop>
              <FormTitle>Kirish</FormTitle>
              <FormDescription>
                Telefon raqamingizni kiriting va tasdiqlash kodini oling
              </FormDescription>
              <FormLabel>Telefon raqami</FormLabel>
            </FormGroupTop>
            <FormControl>
              <Field.Input
                type='number'
                data-cy='input.phone'
                prefix='+998'
                name='phone'
                inputRef={phoneRef}
                readOnly={editPhone}
              />
              {isCodeSended &&
                (editPhone ? (
                  <Button
                    buttonType='roundButton'
                    variant='secondary'
                    size='large'
                    iconName='edit-icon'
                    onClick={handleEditPhone}
                  />
                ) : (
                  <Button
                    buttonType='roundButton'
                    variant='secondary'
                    size='large'
                    iconName='refresh-icon'
                    onClick={handleResendCode.bind(null, true)}
                  />
                ))}
            </FormControl>
            {!isUserFound && isCodeSended && (
              <FormControl>
                <Field.Input
                  type='text'
                  name='name'
                  data-cy='input.name'
                  placeholder='Ism kiriting'
                />
              </FormControl>
            )}
            {isCodeSended && (
              <FormControl>
                <Field.Input
                  type='number'
                  name='code'
                  data-cy='input.code'
                  placeholder='Tasdiqlash kodini kiriting'
                />
                <Button
                  buttonType='roundButton'
                  variant='secondary'
                  size='large'
                  type='button'
                  onClick={handleResendCode.bind(null, false)}
                >
                  <CodeCountdown
                    index={timeIndex}
                    time={time}
                    countRef={countRef}
                  >
                    <SvgIcon $stroke iconName='refresh-icon' />
                  </CodeCountdown>
                </Button>
              </FormControl>
            )}
            {form.errors &&
              Object.keys(form.errors).map(key => (
                <Alert key={key} variant='danger'>
                  {form.errors[key]}
                </Alert>
              ))}
            <FormGroupBottom>
              <FormConditionDesc>
                Tugmani bosish orqali men{' '}
                <Link to='/' onClick={privacyPolicyLink}>
                  <FormConditionLink>shaxsiy ma'lumotlarni</FormConditionLink>
                </Link>{' '}
                qayta ishlashga va{' '}
                <Link to='/' onClick={privacyPolicyLink}>
                  <FormConditionLink>
                    Platformadan foydalanish shartlariga roziman
                  </FormConditionLink>
                </Link>{' '}
              </FormConditionDesc>
              <Button
                buttonType='button'
                type='submit'
                data-cy='button.submit'
                variant='primary'
                size='middle'
                $stroke
                iconName='arrow_right-icon'
                disabled={loading}
              >
                {isCodeSended ? 'Kirish' : 'Davom etish'}
              </Button>
            </FormGroupBottom>
          </ThemeForm>
        </FormContainer>
      </AuthLayout>
    );
  },
  'Login'
);
