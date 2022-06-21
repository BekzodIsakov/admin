import styled, { css } from 'styled-components';

export const CourseLessonList = styled.ul`
  transition: height 0.3s ease;
`;

export const CourseLessonWrapper = styled.div`
  & ${CourseLessonList} {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;
export const CourseLessonHeader = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 39px 16px 24px;
  background-color: #ffffff;
`;
export const CourseLessonHeaderContent = styled.div``;
export const CourseLessonHeaderSections = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.35);
`;
export const CourseLessonHeaderHeading = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
`;
export const CourseLessonHeaderButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }

  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    cursor: pointer;
    background-color: ${props => props.isOpen ? 'rgba(186, 141, 91, 0.1)' : 'transparent'};
    content: '';
  }

  ${props => props.isOpen ? css`& img {transform: rotate(180deg)}` : ''}
`;
