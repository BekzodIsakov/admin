import styled from 'styled-components';

export const TextareaContainer = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 1;
  width: 100%;
  border: 2px solid #dadada;
  border-radius: 8px;
  box-sizing: border-box;
  padding: ${props => props.suffixPadding || '16px 68px 16px 24px'};
  display: flex;
  align-items: center;
`;

export const TextareaField = styled.textarea`
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  border-radius: ${props => props.rounded || '5px'};
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  resize: none;
  border: none;
  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: ${props => props.fontSize || '16px'};
    color: #c4c4c4;
  }
`;

export const TextareaSuffixContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: ${props => props.top || 'calc(100% / 2 - 24px)'};
  bottom: ${props => props.top || 'calc(100% / 2 - 24px)'};
  margin: auto;
  right: ${props => props.right || '14px'};
  height: max-content;
`;
