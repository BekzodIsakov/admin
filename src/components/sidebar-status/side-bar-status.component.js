import { hoc } from '@utils/hoc';
import { useSelector } from 'react-redux';
import { CoursesWidgetCard } from './sidebar-status-card/sidebar-status-card.component';

const useCoursesWidgetProps = () => {
  const courses = useSelector(state => state.common.courses);

  return {
    courses
  };
};

export const CoursesWidget = hoc(useCoursesWidgetProps, ({ courses }) => {
  return (
    <>
      {courses.map(item => (
        <CoursesWidgetCard
          key={item.course.id}
          statusImg={item.course.category.icon.url}
          statusHeading={item.course.title.uz}
          statusDesc={item.course.category.title.uz}
          statusCount={item.progress + '%'}
          statusColor={item.course.category.color}
        />
      ))}
    </>
  );
});
