import styled from 'styled-components';

export const CourseStatus = styled.div`
  padding: 24px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 390px) {
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;

export const CourseStatusTop = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CourseStatusTopImgWrapper = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: rgba(
    ${props =>
      [
        props.color.substring(1, 3),
        props.color.substring(3, 5),
        props.color.substring(5, 7)
      ]
        .map(str => parseInt(str, 16))
        .join(',')},
    0.1
  );
  border-radius: 50%;
`;

export const CourseStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;

export const CourseStatusHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
`;

export const CourseStatusDesc = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.35);
`;

export const CourseStatusStatistic = styled.div``;

export const CourseStatusStatisticDesc = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.75);
`;

export const CourseStatusStatistics = styled.div`
  width: 100%;
  height: 4px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: rgba(
    ${props =>
      [
        props.color.substring(1, 3),
        props.color.substring(3, 5),
        props.color.substring(5, 7)
      ]
        .map(str => parseInt(str, 16))
        .join(',')},
    0.1
  );
  border-radius: 2px;

  &:before {
    width: ${props => props.width};
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: ${props => props.color};
    border-radius: 2px;
    content: '';
  }
`;
