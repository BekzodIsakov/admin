import styled from 'styled-components';

export const BlurredTextContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 0.4rem;
  background-color: ${props => !props.isBlurred && props.theme.colors.white};
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: ${props => !props.isBlurred && 'none'};
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  & span {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-style: italic;
    filter: ${props => props.isBlurred && 'blur(0.5rem)'};
  }

  & button {
    position: absolute;
    top: 100%;
    z-index: 9;

    width: 100%;
    height: 100%;
  }

  &:hover button {
    top: 0;
  }
`;
