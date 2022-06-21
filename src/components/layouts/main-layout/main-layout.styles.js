import styled from 'styled-components';

const StyledMainLayout = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
  background: #e5e5e5;

  & .wrapper {
    margin-left: 10rem;
    width: 100%;

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  & .inner-wrapper {
    display: flex;
    gap: 2rem;
    width: 100%;
    padding: 3.6rem 4rem 2.4rem;
    padding-top: 13rem;

    & > div {
      &:not(:first-child) {
        background-color: ${props => props.theme.colors.white};
      }
      border-radius: 0.4rem;
    }

    & > div:first-child {
      flex-grow: 1;
    }

    @media (max-width: 1024px) {
      & {
        padding: 2.4rem 1rem 6rem;
        flex-direction: column;
      }

      & > div {
        max-width: initial;
        min-width: initial;
      }
    }
  }
`;

export { StyledMainLayout };
