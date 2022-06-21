import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';
import hand_laptop from '@assets/img/hand_laptop.png';

export const EmptyPaymentsHistoryBase = styled.div`
  background: url(${hand_laptop}) no-repeat right;
  background-origin: content-box;
  height: 28.3rem;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius[50]};
  padding: 3.2rem;
  padding-right: 4.6rem;

  & > div {
    max-width: 26.4rem;
  }
`;

export const Description = styled.p`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

export const Link = styled(_Link)`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.1rem 2.4rem;
  color: white;
  background-color: ${props => props.theme.colors.green};
  border-radius: 10rem;
  font-size: 1.4rem;
  margin-top: auto;
  margin-bottom: 0;

  & > span {
    line-height: 1.9rem;
  }
`;
