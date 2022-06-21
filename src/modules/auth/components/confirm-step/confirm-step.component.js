import React from 'react';
import { hoc } from '@utils/hoc';
import { useConfirmStepProps } from './confirm-step.props';
import { ConfirmStepContainer } from './confirm-step.style';

/**
 * <ConfirmStep />
 */
const ConfirmStep = hoc(useConfirmStepProps, () => (
  <ConfirmStepContainer>
    {/* content */}
    {/* content */}
    {/* content */}
  </ConfirmStepContainer>
));

export { ConfirmStep };
