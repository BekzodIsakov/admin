import styled from 'styled-components';

export const StudentResultWrapper = styled.div`
  margin-top: 36px;
`;

export const StudentResultTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 24px;
`;

export const StudentResultHolder = styled.div``;

export const StudentResultMobileNavbar = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    width: auto;
    border-radius: 100px;
    padding: 4px;
    margin-bottom: 8px;
  }
`;

export const StudentResultMobileNav = styled.h4`
  font-style: normal;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${props => (props.active ? '#000' : '#81755C')};
  padding: 8px 10px;
  background: ${props => (props.active ? '#F1F0EE' : 'transparent')};
  border-radius: 100px;
`;
