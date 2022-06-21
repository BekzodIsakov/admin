import styled from 'styled-components';

export const StyledThumbnailWrapper = styled.div`
  width: 18rem;
  min-width: 18rem;
  height: 10.4rem;

  @media (max-width: 1024px) {
    width: 100%;
    height: 17.8rem;
  }
`;

export const StyledThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 0.3rem);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${props => `url(${props.backgroundImg})`};
  background-size: cover;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 0.3rem;
  background: #ffe0e0;
  position: relative;
`;

export const Progress = styled.div`
  background: ${props => props.theme.colors.red};
  width: ${props => props.progressPercentage}%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlayButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  box-shadow: inset 0 0 0 1px white;
  border-radius: 50%;
  transition: transform 200ms;
  cursor: pointer;

  & > svg {
    width: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 3.8rem;
    height: 3.8rem;
  }
`;
