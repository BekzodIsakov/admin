import styled, { css } from 'styled-components';

export const Option = styled.span`
  padding: 14px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #333;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${props =>
    props.isActive
      ? css`
          background-color: #f9f9f9;
          font-weight: 600;
          color: #000000;
        `
      : ''}
  border-radius: 12px;
`;
