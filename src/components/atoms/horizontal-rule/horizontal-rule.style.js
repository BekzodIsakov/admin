import styled from 'styled-components';

export const HorizontalRule = styled.div`
  height: ${props => props.width || '0.1rem'};
  margin-top: ${props => props.marginTop || '2.4rem'};
  margin-bottom: ${props => props.marginBottom || '2.4rem'};
  background-color: ${props => props.color || '#dadada'};
`;
