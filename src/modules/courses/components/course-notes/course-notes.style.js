import styled from 'styled-components';

import DropDownIcon from '../../../../assets/img/drop-down.svg';

export const CourseNotesContainer = styled.div``;

export const CourseNotesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const CourseNotesCount = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;
`;

export const CourseNotesFilterWrapper = styled.div`
  display: flex;
  align-items: cetner;
`;

export const CourseNotesFilterTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.35);
  margin-right: 12px;

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

export const CourseNotesForm = styled.form``;

export const CourseNotesFilterBy = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #000000;
  padding-right: 15px;
  position: relative;
  cursor: pointer;
  user-select: none;

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    margin: auto;
    background-repeat: no-repeat;
    background-image: url(${DropDownIcon});
    background-size: contain;
  }
`;

export const CourseNotesFilterHolder = styled.div`
  position: relative;
`;

export const CourseNotesFilterItemsWrapper = styled.div`
  width: 200px;
  background: #ffffff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  padding: ${props => (props.active ? '18px' : '0')};
  top: 20px;
  right: 0;
  height: ${props => (props.active ? 'auto' : '0')};
  overflow: hidden;
`;

export const CourseNotesFilterItem = styled.h4`
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #000000;
  padding-bottom: 10px;
  transition: all ease 0.3s;

  &:hover {
    color: #ba8d5b;
  }

  &:not(:first-child) {
    padding-top: 10px;
  }

  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const AddCourseNote = styled.form`
  margin-bottom: 24px;
`;

export const AddCourseNoteInput = styled.input`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
  padding-left: 16px;
  border: none;
  outline: none;
  width: 90%;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #c4c4c4;

    @media only screen and (max-width: 1024px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const AddCourseNoteBtn = styled.button`
  background: #ba8d5b;
  border-radius: 50%;
  padding: 16px;
  border: none;
  display: flex;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    padding: 13px;
  }

  svg {
    fill: #fff;
    width: 12px;
    height: 12px;
  }
`;

export const CourseNotesBottom = styled.div`
  margin-top: 24px;
`;

export const CancelSendNotes = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: #000000;
  margin-right: 32px;
  cursor: pointer;
`;
export const CancelSendNoteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
`;
