import {
  CourseLessonHeader,
  CourseLessonHeaderContent,
  CourseLessonHeaderHeading,
  CourseLessonHeaderButton,
  CourseLessonHeaderSections,
  CourseLessonList,
  CourseLessonWrapper
} from './course-lessons-item.style';

import headerArrow from '../../../../../assets/img/arrow.svg';
import { LessonItem } from './lesson-item/lesson-item.component';
import { hoc } from '@utils/hoc';
import { useCourseLessonItem } from './course-lesson-item.props';

export const CourseLesson = hoc(
  useCourseLessonItem,
  ({ item, isOpen, onHeaderBtnClick, index, activeLesson }) => {
    return (
      <CourseLessonWrapper isOpen={isOpen}>
        <CourseLessonHeader>
          <CourseLessonHeaderContent>
            <CourseLessonHeaderSections>
              {index + 1}-bo'lim {item.viewCount}/{item.lessons.length}
            </CourseLessonHeaderSections>
            <CourseLessonHeaderHeading>{item.title}</CourseLessonHeaderHeading>
          </CourseLessonHeaderContent>
          <CourseLessonHeaderButton onClick={onHeaderBtnClick} isOpen={isOpen}>
            <img src={headerArrow} alt='' width='14' height='10' />
          </CourseLessonHeaderButton>
        </CourseLessonHeader>

        <CourseLessonList>
          {item?.lessons.map((lesson, i) => {
            return (
              <LessonItem
                item={lesson}
                lessonSequence={i + 1}
                key={lesson?.id + i}
                isViewed={lesson?.progress >= 95}
                inProgress={lesson?.id === activeLesson?.id}
              />
            );
          })}
        </CourseLessonList>
      </CourseLessonWrapper>
    );
  }
);

CourseLesson.defaultProps = {
  item: {}
};
