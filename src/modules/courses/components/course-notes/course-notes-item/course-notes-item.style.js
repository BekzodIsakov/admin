import styled from 'styled-components';

export const CourseNotesItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CourseNotesItemTime = styled.h4`
  background: rgba(186, 141, 91, 0.1);
  border-radius: 100px;
  padding: 4px 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  margin-right: 10px;
  letter-spacing: -0.02em;
  color: #ba8d5b;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    margin-right: 8px;
  }
`;

export const CourseNotesCenter = styled.div`
  width: 100%;
`;

export const CourseNotesCenterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    display: flex;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

export const CourseNotesItemTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-right: 8px;

  @media only screen and (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 2px;
  }
`;

export const CourseNotesItemSubtitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 1024px) {
    font-size: 10px;
    margin-bottom: 8px;
  }
`;

export const CourseNotesItemText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
  max-width: 700px;
`;

export const CourseNotesItemRight = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseNotesItemBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
