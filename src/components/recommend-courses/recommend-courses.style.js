import styled from 'styled-components';

export const RecommendCoursesWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0;
  }

  @media only screen and (max-width: 1024px) {
    overflow: auto;
    max-width: 800px;
    padding-bottom: 0 !important;
  }
`;

export const RecommendedCourse = styled.div`
  padding: 20px 24px 52px 24px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 20px;

  @media only screen and (max-width: 1024px) {
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const RecommendCourseHolder = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 800px;
    overflow-x: scroll;
    padding-bottom: 0 !important;
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const RecommendedCourseTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 24px;
`;

export const RecommendCourseCards = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    padding-right: 20px;
  }
`;
