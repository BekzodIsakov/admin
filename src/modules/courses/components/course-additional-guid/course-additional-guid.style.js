import styled from 'styled-components';

export const CourseAdditionalGuidContainer = styled.div``;

export const CourseAdditionalGuidTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CourseAdditionalGuidTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;

  @media only screen and (max-width: 1024px) {
    max-width: 70%;
  }
`;

export const CourseAdditionalGuidTopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseAdditionalGuidSubTitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.35);
  margin-right: 12px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const CourseAdditionalGuidBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export const CourseAdditionalGuidCardImg = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
`;

export const CourseAdditionalGuidCardWrapper = styled.a`
  padding: 0 10px;
  flex-basis: 50%;
  max-width: 50%;
  text-decoration: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:not(:nth-last-child(2)) {
    margin-bottom: 24px;
  }
`;
