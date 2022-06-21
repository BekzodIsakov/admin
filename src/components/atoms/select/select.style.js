import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 1.1rem 1.6rem;
  font-weight: 600;
  font-size: 16px;
  line-height: 2.2rem;
  color: ${props => (props.isSelect ? '#222222' : 'rgba(0,0,0,0.35)')};
  text-align: left;
  background-color: #fff;
  border-radius: 24px;
  border: 2px solid
    ${props => (props.isError ? 'rgba(255, 0, 0, 0.5)' : '#dadada')};
  cursor: pointer;

  &:after {
    width: 24px;
    height: 24px;
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 10px;
    background-image: url(${props => props.arrowIcon});
    background-repeat: no-repeat;
    background-position: center center;
    content: '';
    ${props =>
      props.isOpen
        ? css`
            transform: rotate(180deg);
          `
        : ''}
    transition: transform 0.2s ease;
  }
`;

export const SelectContent = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  z-index: 9;

  display: ${props => (props.isOpen ? 'flex' : 'none')};
  width: 100%;
  flex-direction: column;

  padding: 18px 16px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
`;
