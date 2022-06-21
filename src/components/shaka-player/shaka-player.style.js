import styled from 'styled-components';

export const ShakaPlayerContainer = styled.div`
  position: relative;
  height: calc(100vw * 0.3);
  background-color: rgba(0, 0, 0);

  @media (max-width: 1024px) {
    height: calc(100vw * 0.5);
  }
`;

export const ShakaPlayerVideo = styled.video`
  width: 100%;
  height: 100%;
  filter: blur(${props => (props.blur ? '8px' : '0')});
`;

export const ShakaPlayerWatermark = styled.span`
  border-radius: 5px;
  padding: 3px 5px;
`;

export const ShakaNextPrevButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(18px);
  border-radius: 50%;
  border: none;
`;

export const ShakaButtonTheme = styled.span`
  display: none;
  align-items: center;
  margin-left: 18px;
  margin-right: 18px;
  max-width: 177px;
  padding: 5px 24px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(18px);
  border-radius: 100px;
  height: 44px;
  color: #ffffff;
`;

export const ShakaPlayerButtonWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  z-index: 2;
  right: ${props => (props.right ? '0' : 'initial')};
  left: ${props => (props.left ? '0' : 'initial')};
  top: 50%;
  transform: translateY(-50%);

  &:hover ${ShakaButtonTheme} {
    display: inline-flex;
  }
`;

export const SafariIsNotSupported = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #fff;
  text-decoration: underline;
`;
