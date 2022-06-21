import { Button } from '@components/atoms';
import { hoc } from '@utils/hoc';
import { FlexContainer } from 'src/styles/flex-container';
import { AuthLayoutBackBtn, AuthLayoutGradient } from './auth-layout.style';

const useAuthLayoutProps = () => {};

export const AuthLayout = hoc(
  useAuthLayoutProps,
  ({ children, onBack, hideBackButton }) => {
    return (
      <FlexContainer align='center'>
        <AuthLayoutGradient />
        <AuthLayoutBackBtn>
          {!hideBackButton && (
            <Button
              onClick={onBack}
              buttonType='roundButton'
              variant='secondary'
              size='large'
              iconName='arrow_left-icon'
              $stroke
            ></Button>
          )}
        </AuthLayoutBackBtn>
        {children}
      </FlexContainer>
    );
  }
);
