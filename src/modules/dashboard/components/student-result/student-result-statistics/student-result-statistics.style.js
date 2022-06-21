import styled from 'styled-components';

export const StudentResultStatisticsWrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 24px 24px 32px 24px;
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 24px 20px;
  }
`;

export const StudentResultStatisticsTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 8px;
`;

export const StudentResultStatisticsSubtitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ba8d5b;
  margin-bottom: 24px;
`;

export const StudentResultStatisticsLastOver = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 25px;
`;
