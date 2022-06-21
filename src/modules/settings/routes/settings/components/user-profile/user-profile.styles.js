import { FlexWrapper } from '@components/layouts/flex-wrapper/flex-wrapper.component';
import styled from 'styled-components';

export const UserProfileContainer = styled(FlexWrapper)`
  margin-bottom: 4.8rem;

  @media (max-width: 1024px) {
    margin-bottom: 3.4rem;
  }
`;

export const UserFullName = styled.h3`
  margin-bottom: 0.8rem;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 3.2rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin-bottom: 0.6rem;
    font-size: 2rem;
    line-height: 2.7rem;
  }
`;

export const RegistrationDate = styled.p`
  font-family: ManropeMedium;
  text-align: center;
  line-height: 2rem;
  color: #a6a6a6;
`;
