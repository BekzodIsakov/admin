import styled from 'styled-components';

export const UnModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0.2, 0.3);
  overflow: hidden;
  height: ${props => (props.isOpen ? '100vh' : '0')};
  width: ${props => (props.isOpen ? '100%' : '0')};
  z-index: ${props => (props.isOpen ? '20' : '0')};

  @media only screen and (max-width: 425px) {
    padding: 0 15px;
  }
`;

export const UnModalInner = styled.div`
  padding: ${props =>
    props.simple ? '24px 24px 30px 24px' : '24px 70px 30px 24px'};
  background-color: #fff;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media only screen and (max-width: 425px) {
    padding: 12px;
  }
`;

export const UnModalTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 30px;

  @media only screen and (max-width: 425px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const UnModalBottom = styled.div``;
