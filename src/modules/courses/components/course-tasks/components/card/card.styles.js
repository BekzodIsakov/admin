import styled from 'styled-components';

export const CardContainer = styled.a`
  display: flex;
  gap: 1.6rem;
  min-width: 32.8rem;
  padding: 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: #000000;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.subtitle ? 'space-between' : 'center')};
    height: 4.4rem;
  }
`;

export const CardContainerWithoutLink = styled.div`
  display: flex;
  gap: 1.6rem;
  min-width: 32.8rem;
  text-decoration: none;
  color: #000000;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.subtitle ? 'space-between' : 'center')};
    height: 4.4rem;
  }
`;

export const CardWithoutLink = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  padding: 1.6rem;
  align-items: center;
`;
