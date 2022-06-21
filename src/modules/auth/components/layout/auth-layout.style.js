import styled from 'styled-components';

export const AuthLayoutGradient = styled.div`
  width: 100px;
  height: 100vh;
  background-image: conic-gradient(
    from 270deg at 100% 100%,
    #7000ff 65deg,
    #ffc700 89.68deg,
    #fff500 360deg
  );
  background-color: #006cd0;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const AuthLayoutBackBtn = styled.span`
  position: absolute;
  z-index: 1;
  top: 32px;
  left: 132px;

  @media (max-width: 1024px) {
    left: 56px;
  }

  @media (max-width: 545px) {
    top: 44px;
    left: 20px;
  }
`;
