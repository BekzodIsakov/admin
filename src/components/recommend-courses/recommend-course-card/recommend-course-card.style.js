import styled from 'styled-components';

export const RecommendedCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 32%;
`;

export const RecommendCourseImage = styled.img`
  width: 100%;
  height: 158px;
  border-radius: 4px;
  object-fit: cover;
  margin-bottom: 16px;
  object-position: right center;
`;

export const RecommendCourseTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0;
  color: #000000;
  margin-bottom: 6px;
`;

export const RecommendedCourseText = styled.p`
  flex-grow: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
`;

export const RecommendCourseCardLink = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  display: inline-block;
  text-decoration: none;
  padding: 19px 0;
  color: #ba8d5b;

  svg {
    margin-left: 12px;
    transition: all ease 0.3s;
  }

  &:hover svg {
    margin-left: 18px;
  }
`;
