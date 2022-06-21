import styled from 'styled-components';

const StyledHeader = {};

const H1 = styled.h1`
  font-size: 2.6rem;
  line-height: 3.5rem;
  font-family: 'ManropeSemiBold';
  color: ${props => props.color};
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-family: 'ManropeSemiBold';
  color: ${props => props.color};
`;

const H3 = styled.h3`
  font-size: 2rem;
  line-height: 2.4rem;
  font-family: 'ManropeMedium';
  color: ${props => props.color};
`;

const H4 = styled.h4`
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-family: 'ManropeSemiBold';
  color: ${props => props.color};
`;

const H5 = styled.h5`
  font-size: 1.6rem;
  line-height: 2rem;
  font-family: 'ManropeSemiBold';
  color: ${props => props.color};
`;

const H6 = styled.h6`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-family: 'ManropeMedium';
  color: ${props => props.color};
`;

StyledHeader.h1 = H1;
StyledHeader.h2 = H2;
StyledHeader.h3 = H3;
StyledHeader.h4 = H4;
StyledHeader.h5 = H5;
StyledHeader.h6 = H6;

export { StyledHeader };
