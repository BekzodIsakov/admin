import React from 'react';
import { hoc } from '@utils/hoc';
import { useLoginStepProps } from './login-step.props';
import { LoginStepContainer } from './login-step.style';
import { Input } from '@components/atoms/Input';

/**
 * <LoginStep />
 */
const LoginStep = hoc(useLoginStepProps, () => (
  <LoginStepContainer>
    <Input type='text' />
  </LoginStepContainer>
));

export { LoginStep };
