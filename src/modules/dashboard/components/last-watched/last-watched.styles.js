import styled from 'styled-components';

export const StyledLastWatched = styled.div`
  display: flex;
  gap: 1.6rem;

  padding: 1.6rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius[50]};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
