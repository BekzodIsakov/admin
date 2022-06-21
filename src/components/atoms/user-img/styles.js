import styled, { css } from 'styled-components';
import { getSizeBySizeType } from '@utils/style-helpers';

const StyledUserImg = styled.div`
  width: ${getSizeBySizeType({ large: 16, middle: 4, small: 2.4 })}rem;
  height: ${getSizeBySizeType({ large: 16, middle: 4, small: 2.4 })}rem;

  & > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    ${props =>
      props.size === 'large' &&
      css`
        width: 12rem;
        height: 12rem;
      `}
  }
`;

export { StyledUserImg };
