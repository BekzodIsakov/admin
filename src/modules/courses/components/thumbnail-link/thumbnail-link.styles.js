import styled from 'styled-components';

export const ThumbnailLinkContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 83%;

  background-image: linear-gradient(
    to top,
    transparent,
    rgba(0, 0, 0, 0.35) 90%
  );

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    color: #ffffff;
    margin-bottom: 2.4rem;
  }
`;

export const CancelBtn = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const StyledThumbnailLink = styled.div`
  width: 40%;
  height: 50%;
  position: relative;
  background: #ccc ${props => `url(${props.imgSrc})`} no-repeat;
  background-size: cover;
  cursor: pointer;

  & span > div {
    padding: 1.6rem 2rem;
    color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;

    h4 {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    h6 {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    div {
      position: absolute;
      width: min-content;
      border-radius: 100px;
      padding: 0.2rem 1.2rem;
      font-size: 1.4rem;
      line-height: 1.9rem;
      background-color: rgba(0, 0, 0, 0.5);
      right: 1.2rem;
      bottom: 1.2rem;
      backdrop-filter: blur(0.5rem);

      @media (max-width: 1024px) {
        font-size: 0.8rem;
        line-height: 1rem;
        padding: 0.1rem 0.8rem;
      }
    }
  }

  img {
    display: inline-block;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  margin-bottom: 2.4rem;
  color: ${props => props.theme.colors.white};

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 0.9rem;
  }
`;

export const CircularProgress = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 22px auto;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const ValueContainer = styled.img`
  position: relative;
  width: 18px;
  height: 24px;
  object-fit: contain;
`;
