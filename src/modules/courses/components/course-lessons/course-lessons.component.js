import { CourseLesson } from './course-lessons-item/course-lessons-item.component';
import { CourseLessonsWrapper } from './course-lessons.style';
import { useSelector } from 'react-redux';

export const CourseLessons = () => {
  const courseChapters = useSelector(state => state.courses.courseChapters);

  return (
    <CourseLessonsWrapper>
      {courseChapters?.map((item, i) => (
        <CourseLesson item={item} index={i} key={i} />
      ))}
    </CourseLessonsWrapper>
  );
};
