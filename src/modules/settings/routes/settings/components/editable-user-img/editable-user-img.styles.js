import styled from 'styled-components';

export const EditableUserImgContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2.4rem;

  @media (max-width: 1024px) {
    margin-bottom: 1.8rem;
  }
`;

export const ButtonInputWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  width: 4.8rem;
  height: 4.8rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;

  button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4.8rem;
    height: 4.8rem;
  }

  input[type='file']::-webkit-file-upload-button {
    /* chromes and blink button */
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 4rem;
    height: 4rem;

    button {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const ImageFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;
