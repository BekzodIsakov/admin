import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 24px;
  background: ${props => props.theme.colors.white};
  border-radius: 4px;

  & + & {
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 17px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
