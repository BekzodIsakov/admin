import { Link } from 'react-router-dom';

import { hoc } from '@utils/hoc';

import {
  Wrapper,
  InfoTrigger,
  InfoBox,
  InfoBoxTop,
  InfoBoxHeading,
  InfoBoxText,
  CourseTitle,
  TeacherInfoWrapper,
  TeacherName,
  BottomInfo,
  BottomInfoText
} from './course-card.style';

import { SvgIcon } from '@components/atoms/icons/index';
import { UserImg } from '@components/atoms/user-img/index';

const useCoursesProps = () => {};

export const CourseCard = hoc(
  useCoursesProps,
  ({ item }) => {
    return (
      <>
        <Wrapper>
          <Link to={`/courses/${item.id}`}>
            <InfoTrigger>
              <SvgIcon iconName='icon-info' size='12px' />

              <InfoBox>
                <InfoBoxTop>
                  <SvgIcon iconName='icon-info' size='12px' color='#81755C' />
                  <InfoBoxHeading>Batafsil tafsilot</InfoBoxHeading>
                </InfoBoxTop>

                <InfoBoxText>{item.description.uz}</InfoBoxText>
              </InfoBox>
            </InfoTrigger>

            <CourseTitle>{item.title.uz} </CourseTitle>

            <TeacherInfoWrapper>
              <UserImg
                src={item.teacher_ids?.[0]?.picture?.url}
                size='middle'
                alt={`${item.teacher_ids?.[0]?.name?.uz}'s avatar`}
              />

              <TeacherName>{item.teacher_ids?.[0]?.name?.uz}</TeacherName>
            </TeacherInfoWrapper>

            <BottomInfo>
              <BottomInfoText>Davomiylik: {item.duration} oy </BottomInfoText>
              <BottomInfoText>
                Darslar soni: {item.lesson_count} ta{' '}
              </BottomInfoText>
            </BottomInfo>
          </Link>
        </Wrapper>
      </>
    );
  },
  'CourseCard'
);
