import styled from 'styled-components';

import closeBtn from '../../../../assets/img/close.svg';

export const CourseTasksContainer = styled.div``;

export const CourseTasksSendHolder = styled.div``;

export const CourseTaskSendWrapper = styled.form`
  display: flex;
  margin-top: ${props => (props.active ? '0' : '52px')};
  align-items: center;
`;

export const CourseTaskSendFile = styled.label`
  display: inline-flex;
  svg {
    fill: #ba8d5b;
    stroke: #ba8d5b;
  }
`;

export const CourseTaskSendInput = styled.input`
  display: none;
`;

export const CourseTaskSendBtn = styled.button`
  background: #ba8d5b;
  border-radius: 100px;
  padding: 12px 36px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  margin-left: 20px;

  &:disabled {
    opacity: 0.4;
  }
`;
export const CourseTaskHomeWorkFile = styled.div`
  background: rgba(186, 141, 91, 0.1);
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin-left: auto;
  max-width: 266px;
  padding: 4px 16px 4px 4px;
  margin-bottom: 12px;
  margin-top: 52px;
`;

export const CourseTaskDeleteHomeWorkFile = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #ba8d5b;
  position: relative;

  &:before {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${closeBtn});
  }
`;

export const CourseTaskFileTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-left: 16px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubmissionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dadada;
`;
