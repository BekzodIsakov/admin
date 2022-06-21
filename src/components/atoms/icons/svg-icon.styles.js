import styled from 'styled-components';

export const SVG = styled.svg`
  width: ${props => props.size || '2rem'};
  height: ${props => props.size || '2rem'};
  fill: ${props => props.iconColor || props.theme.colors.black};
  stroke: ${props =>
    props.$stroke
      ? props.iconColor
        ? props.iconColor
        : props.theme.colors.black
      : ''};
  transition-duration: 200ms;

  &[disabled] {
    opacity: 0.2;
  }
`;
