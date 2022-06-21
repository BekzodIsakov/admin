import styled from 'styled-components';

export const StyledBottomNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;

  width: 100%;
  background: ${props => props.theme.colors.white};

  ul {
    display: flex;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 1024px) {
    ul {
      justify-content: space-around;
    }
  }
`;

export const ModalTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 24px;

  @media only screen and (max-width: 425px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const ModalButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${props => (props.danger ? 'transparent' : '#3D444F')};
  border-radius: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  background-color: ${props => (props.danger ? '#FF5454' : '#fff')};
  cursor: pointer;
  color: ${props => (props.danger ? '#fff' : '#0D1523')};
  outline: none;
  margin-left: ${props => (props.danger ? '10px' : '0')};
`;
