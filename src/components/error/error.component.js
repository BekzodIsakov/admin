import { hoc } from '@utils/hoc';
import { useHistory } from 'react-router-dom';
import { MainLayout } from '@components/layouts/main-layout/main-layout.component';
import ErrorPageImage from '@assets/img/error-page.png';
import { SvgIcon } from '@components/atoms/icons/svg-icon.component';

import {
  ErrorPageWrapper,
  ErrorPageImg,
  ErrorPageTitle,
  ErrorPageBtn
} from './error.style';

const useErrorPageProps = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/dashboard');
  };

  const errorText = "Siz so'ragan bu sahifa topilmadi. Bosh sahifaga qayting";

  return {
    handleClick,
    errorText
  };
};

export const Error = hoc(
  useErrorPageProps,
  ({ handleClick, errorText, ...rest }) => {
    return (
      <MainLayout>
        <ErrorPageWrapper data-testid='error-component' {...rest}>
          <ErrorPageImg src={ErrorPageImage} alt='error-img' />
          <ErrorPageTitle data-testid='error-text'>{errorText}</ErrorPageTitle>
          <ErrorPageBtn data-testid='to-home-button' onClick={handleClick}>
            Bosh sahifa
            <SvgIcon
              fill='#fff'
              size='12px'
              iconName='arrow_right-icon'
              $stroke='#fff'
            />
          </ErrorPageBtn>
        </ErrorPageWrapper>
      </MainLayout>
    );
  }
);
