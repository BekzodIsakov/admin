import styled from 'styled-components';

export const InputField = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: ${props => props.paddingSize || '11px'} 16px
    ${props => props.paddingSize || '11px'}
    ${props => (props.isPrefix ? '56px' : '16px')};
  background-color: #fff;
  border: 2px solid
    ${props => (props.isError ? 'rgba(255, 0, 0, 0.5)' : '#dadada')};
  border-radius: 100px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  &::placeholder {
    font-weight: normal;
    font-size: 16px;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: #fff;
`;
export const InputPrefix = styled.span`
  position: absolute;
  z-index: 99;
  top: ${props => props.top || '13px'};
  left: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
export const InputSuffix = styled.span`
  position: absolute;
  z-index: 99;
  top: ${props => props.top || '13px'};
  right: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
