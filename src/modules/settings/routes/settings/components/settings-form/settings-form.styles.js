import styled from 'styled-components';
import { FlexWrapper } from '@components/layouts/flex-wrapper/flex-wrapper.component';
import { Button as _Button } from '@components/atoms/index';

export const SettingsFormContainer = styled.div`
  & .inner-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-auto-rows: auto;
    gap: 3.2rem 2.5rem;

    margin-bottom: 4.4rem;
    padding: 0;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      row-gap: 2.5rem;
    }
  }

  & input {
    z-index: 0;
  }
`;

export const InputWrapper = styled(FlexWrapper)`
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const Button = styled(_Button)`
  margin-right: 0;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;
