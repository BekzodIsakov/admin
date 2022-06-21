import styled from 'styled-components';

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;

  @media (max-width: 1024px) {
    margin-bottom: 0.8rem;
  }
`;

export const Description = styled.p`
  max-height: 3.2rem;
  margin-bottom: 0.3rem;

  font-family: 'Manrope';
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #808080;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    margin-bottom: 1.6rem;
  }
`;
