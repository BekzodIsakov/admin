import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  width: calc(100% - 100px);
  align-items: center;
  height: 10rem;
  padding: 0 4rem;
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  & > div:nth-child(2) {
    margin-right: 0;
    margin-left: auto;
  }

  @media only screen and (max-width: ${props => props.theme.devices.phone}) {
    height: 6rem;
    padding: 0 2rem;

    & > div:nth-child(2) {
      gap: 2.4rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    & > div:nth-child(1) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { StyledHeader };
