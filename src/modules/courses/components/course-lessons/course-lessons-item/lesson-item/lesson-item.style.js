import styled from 'styled-components';

export const CourseLessonItem = styled.li``;
export const CourseLessonItemLink = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  cursor: pointer;
`;
export const CourseLessonItemLinkIcon = styled.span`
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgba(0, 0, 0, 0.1);
  background-color: ${props =>
    props.isViewed ? '#7AD111' : props.inProgress ? '#BA8D5B' : 'transparent'};
  border-radius: 50%;
`;
export const CourseLessonItemLinkContent = styled.div`
  margin-left: 16px;
`;
export const CourseLessonItemLinkLessonCount = styled.p`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 600;
  color: ${props => (props.inProgress ? '#BA8D5B' : 'rgba(0, 0, 0, 0.35)')};
`;
export const CourseLessonItemLinkLessonHeading = styled.h4`
  font-weight: 600;
  color: ${props => (props.inProgress ? '#000000' : 'rgba(0, 0, 0, 0.6)')};
`;
