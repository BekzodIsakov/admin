import { hoc } from '@utils/hoc';
import { SvgIcon } from '@components/atoms';

import {
  RecommendedCourseCard,
  RecommendCourseImage,
  RecommendCourseTitle,
  RecommendedCourseText,
  RecommendCourseCardLink
} from './recommend-course-card.style';
import { config } from 'src/config';

const useRecommendCourseCardProps = () => {};

export const RecommendCourseCard = hoc(
  useRecommendCourseCardProps,
  ({ cardTitle, cardText, cardToLink, cardImg }) => {
    return (
      <RecommendedCourseCard>
        <RecommendCourseImage
          src={
            cardImg ??
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
          }
          data-testid='recommended-course-img'
        />

        <RecommendCourseTitle data-test-id='recommended-course-title'>
          {cardTitle}
        </RecommendCourseTitle>

        <RecommendedCourseText data-testid='recommended-course-text'>
          {cardText.slice(0, 75) + '...'}
        </RecommendedCourseText>

        <RecommendCourseCardLink
          href={`${config.landingUrl}/courses/${cardToLink}`}
          target='_blank'
          data-testid='recommended-courseLink'
        >
          Batafsil
          <SvgIcon
            size='12px'
            iconColor='#BA8D5B'
            $stroke='s'
            iconName='arrow_right-icon'
          />
        </RecommendCourseCardLink>
      </RecommendedCourseCard>
    );
  },
  'RecommendCourseCard'
);
