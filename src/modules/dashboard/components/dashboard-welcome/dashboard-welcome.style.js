import styled from 'styled-components';
import itDevsImg from '../../../../assets/img/two-it-devs.png';
import itDevs2xImg from '../../../../assets/img/two-it-devs@2x.png';

export const DashboardWelcomeContainer = styled.div`
  width: 100%;
  padding: 48px 0 48px 32px;
  background-image: image-set(url(${itDevsImg}) 1x, url(${itDevs2xImg}) 2x);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 1350px) {
    padding: 20px 0 95px 36px;
  }

  @media (max-width: 490px) {
    padding: 36px 54px 281px 20px;
    background-position: calc(50% + 15px) bottom;
  }

  @media (max-width: 315px) {
    padding-right: 0;
  }
`;

export const DashboardWelcomeParagraph = styled.p`
  max-width: 375px;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 26px;
  line-height: 36px;
  font-weight: bold;

  @media (max-width: 1350px) {
    max-width: 100%;
  }

  @media (max-width: 975px) {
    font-size: 24px;
    line-height: 33px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const DashboardWelcomeDesc = styled.p`
  max-width: 375px;
  margin-top: 0;
  margin-bottom: 35px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 22px;

  @media (max-width: 1350px) {
    margin-bottom: 75px;
  }

  @media (max-width: 490px) {
    margin-bottom: 36px;
    font-size: 12px;
    line-height: 20px;
  }
`;
