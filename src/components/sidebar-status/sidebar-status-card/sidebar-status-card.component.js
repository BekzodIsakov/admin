import {
  CourseStatus,
  CourseStatusContent,
  CourseStatusDesc,
  CourseStatusHeading,
  CourseStatusStatistic,
  CourseStatusStatisticDesc,
  CourseStatusStatistics,
  CourseStatusTop,
  CourseStatusTopImgWrapper
} from './sidebar-status-card.style';

export const CoursesWidgetCard = ({
  statusImg,
  statusHeading,
  statusDesc,
  statusCount,
  statusColor
}) => {
  return (
    <CourseStatus>
      <CourseStatusTop>
        <CourseStatusTopImgWrapper color={statusColor}>
          <img src={statusImg} alt='status' width='20' height='20' />
        </CourseStatusTopImgWrapper>
        <CourseStatusContent>
          <CourseStatusHeading>{statusHeading}</CourseStatusHeading>
          <CourseStatusDesc>{statusDesc}</CourseStatusDesc>
        </CourseStatusContent>
      </CourseStatusTop>
      <CourseStatusStatistic>
        <CourseStatusStatisticDesc>
          {statusCount} dars yakunlangan
        </CourseStatusStatisticDesc>
        <CourseStatusStatistics
          color={statusColor}
          width={statusCount}
        ></CourseStatusStatistics>
      </CourseStatusStatistic>
    </CourseStatus>
  );
};
