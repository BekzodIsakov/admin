import styled from 'styled-components';

export const StyledNavLinkContainer = styled.li`
  width: 100%;
  height: 7.2rem;
  position: relative;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #bfbfbf;
    stroke: ${props => props.$stroke && '#bfbfbf'};
    position: absolute;
    left: 3.5rem;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #000;
    font-weight: 600;
    padding-left: 9rem;
    &::before {
      content: '';
      display: none;
      top: 0;
      left: 0;
      position: absolute;
      width: 0.3rem;
      height: 100%;
      background-color: ${props => props.theme.colors.brown};
    }
  }

  a:hover {
    background-color: ${props => props.theme.colors.cream50};
  }

  .active-link {
    background-color: ${props => props.theme.colors.cream50};

    svg {
      fill: ${props => props.theme.colors.brown};
      stroke: ${props => props.$stroke && props.theme.colors.brown};
    }

    &::before {
      display: block;
    }
  }

  @media (max-width: 1024px) {
    width: 10%;
    height: 5rem;
    svg {
      width: 2rem;
      height: 2rem;
    }

    a:hover {
      background-color: transparent;
    }

    .active-link {
      background: transparent;
      svg {
        fill: ${props => props.theme.colors.brown};
        stroke: ${props => props.$stroke && props.theme.colors.brown};
      }
      &::before {
        display: none;
      }
    }
  }
`;
