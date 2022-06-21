import React from 'react';
import { hoc } from '@utils/hoc';
import { useCourseAdditionalGuidProps } from './course-additional-guid.props';
import {
  CourseAdditionalGuidContainer,
  CourseAdditionalGuidTop,
  CourseAdditionalGuidTitle,
  CourseAdditionalGuidTopRight,
  CourseAdditionalGuidSubTitle,
  CourseAdditionalGuidBottom,
  // CourseAdditionalGuidCardImg,
  CourseAdditionalGuidCardWrapper
} from './course-additional-guid.style';
import { DropDownComponent } from '@components/drop-down/drop-down.component';
import { Card } from '../course-tasks/components/card/card.component';
import { SvgIcon } from '@components/atoms/index';
/**
 * <CourseAdditionalGuid />
 */
const CourseAdditionalGuid = hoc(
  useCourseAdditionalGuidProps,
  ({ filterOptions, additionalFiles }) => (
    <CourseAdditionalGuidContainer>
      {additionalFiles?.length > 0 && (
        <CourseAdditionalGuidTop>
          <CourseAdditionalGuidTitle>
            {additionalFiles.length} ta qo'shimcha qo'llanma va fayl mavjud
          </CourseAdditionalGuidTitle>

          <CourseAdditionalGuidTopRight>
            <CourseAdditionalGuidSubTitle>
              Saralash:
            </CourseAdditionalGuidSubTitle>
            <DropDownComponent
              defaultOption='type-file'
              options={filterOptions}
            />
          </CourseAdditionalGuidTopRight>
        </CourseAdditionalGuidTop>
      )}

      <CourseAdditionalGuidBottom>
        {additionalFiles?.length > 0 ? (
          additionalFiles.map((item, index) => (
            <CourseAdditionalGuidCardWrapper
              href={item?.file?.url}
              key={index}
              target='_blank'
            >
              <Card title={item.title} subtitle={item.file.size} large={true}>
                <SvgIcon iconName='download-icon' iconColor='#BA8D5B' />
              </Card>
            </CourseAdditionalGuidCardWrapper>
          ))
        ) : (
          <h4>Qoshimcha fayl mavjud emas</h4>
        )}
      </CourseAdditionalGuidBottom>
    </CourseAdditionalGuidContainer>
  )
);

export { CourseAdditionalGuid };
