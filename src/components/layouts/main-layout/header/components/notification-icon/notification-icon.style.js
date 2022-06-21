import styled from 'styled-components';

const StyledNotification = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & > span {
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;

    display: ${props => (props.hasNotification ? 'block' : 'none')};
    width: 0.7rem;
    height: 0.7rem;
    border-radius: ${props => props.theme.borderRadius[300]};
    background-color: ${props => props.theme.colors.brown};
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export { StyledNotification };
