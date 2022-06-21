import styled from 'styled-components';

export const ErrorToastComponent = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  overflow: hidden;
  z-index: 22;
  display: ${props => (props.active ? 'block' : 'none')};
`;

export const ErrorToastHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px 18px 26px;
  background: #f95050;
  border-radius: 100px;
  position: absolute;
  bottom: 36px;
  left: 0;
  right: 0;
  margin: auto;
  width: 448px;

  svg {
    fill: #fff;
    stroke: #fff;
    cursor: pointer;

    path {
      fill: #fff;
    }
  }
`;

export const ErrorToastLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorToastImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 15px;
`;

export const ErrorToastTitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
