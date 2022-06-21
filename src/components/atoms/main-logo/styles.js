import styled from 'styled-components';

const StyledMainLogo = styled.div`
  & a {
    display: inline-block;
  }

  & > img {
    width: 100%;
  }

  @media only screen and (max-width: ${props => props.theme.devices.phone}) {
    width: 5.1rem;
  }
`;

export { StyledMainLogo };
