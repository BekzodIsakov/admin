import { hoc } from '@utils/hoc';
import React from 'react';
import { useRegisterStepProps } from './register-step.props';
import { RegisterStepContainer } from './register-step.style';

/**
 * <RegisterStep />
 */
const RegisterStep = hoc(useRegisterStepProps, () => (
  <RegisterStepContainer>
    {/* content */}
    {/* content */}
    {/* content */}
  </RegisterStepContainer>
));

export { RegisterStep };
