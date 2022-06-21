import { FlexWrapper } from '@components/layouts/flex-wrapper/flex-wrapper.component';
import styled from 'styled-components';

export const Title = styled.h5`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #808080;
`;

export const Subtitle = styled(Paragraph)`
  font-size: 1.4rem;
`;

export const RoundContainer = styled(FlexWrapper)`
  width: 4.4;
  min-width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${props =>
    props.active
      ? 'rgba(249, 80, 80, 0.1)'
      : props.norm
      ? 'rgba(254, 215, 102,0.3)'
      : props.pending
      ? 'rgba(186, 141, 91, 0.1)'
      : '#f2fae7'};
`;

export const StyledNumber = styled.span`
  color: ${props =>
    props.active ? '#F95050' : props.norm ? '#fed766' : '#64b700'};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  display: ${props => (props.pending ? 'flex' : 'block')};
  justify-content: ${props => (props.pending ? 'center' : 'flex-start')};
  align-items: ${props => (props.pending ? 'center' : 'flex-start')};
`;

export const ResponsiveFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
