import styled from 'styled-components';

import StudentIllustrator from '../../../../assets/img/student-illustrator.png';
import StudentIllustrator2x from '../../../../assets/img/student-illustrator@2x.png';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 407px;
  padding: 48px 32px 48px 32px;
  background-image: image-set(
    url(${StudentIllustrator}) 1x,
    url(${StudentIllustrator2x}) 2x
  );
  background-repeat: no-repeat;
  background-position: right 20px bottom;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 1350px) {
    padding: 20px 36px 95px 36px;
  }

  @media (max-width: 1200px) {
    background-size: 240px 200px;
  }

  @media (max-width: 375px) {
    padding: 36px 54px 281px 20px;
    background-position: calc(50% + 15px) bottom;
  }

  @media (max-width: 315px) {
    padding-right: 0;
  }
`;

export const Heading = styled.p`
  max-width: 450px;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 26px;
  line-height: 36px;
  font-weight: bold;

  @media (max-width: 1350px) {
    max-width: 100%;
  }

  @media (max-width: 975px) {
    font-size: 20px;
    line-height: 25px;

    font-size: 24px;
    line-height: 33px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const Description = styled.p`
  max-width: 320px;
  margin-top: 0;
  margin-bottom: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  background-color: white;

  @media (max-width: 1350px) {
    margin-bottom: 75px;
  }

  @media (max-width: 375px) {
    margin-bottom: 36px;
    font-size: 12px;
    line-height: 20px;
  }
`;
