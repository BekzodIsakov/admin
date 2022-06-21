import styled from 'styled-components';

export const CourseLessonVideoPlayer = styled.div`
  display: flex;
  margin-top: 180px;
  padding: 0px 24px 24px 24px;
`;
export const CourseLessonVideoPlayerPrev = styled.a`
  width: 64px;
  height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 100px;

  &:hover {
    opacity: 0.7;
  }
`;
export const CourseLessonVideoPlayerNext = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-left: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  color: #ba8d5b;
  border: 1px solid #ba8d5b;
  border-radius: 100px;

  & img {
    margin-right: 19px;
  }
`;
