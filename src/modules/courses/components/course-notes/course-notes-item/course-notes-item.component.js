import React from 'react';
import { hoc } from '@utils/hoc';
import { SvgIcon } from '@components/atoms/index';
import { useCourseNotesItemProps } from './course-notes-item.props';

import {
  CourseNotesItemWrapper,
  CourseNotesItemTime,
  CourseNotesCenter,
  CourseNotesCenterTop,
  CourseNotesItemTitle,
  CourseNotesItemSubtitle,
  CourseNotesItemText,
  CourseNotesItemRight,
  CourseNotesItemBtn
} from './course-notes-item.style';

const CourseNotesItem = hoc(
  useCourseNotesItemProps,
  ({ time, title, subtitle, text, id, deleteNote, editNote, onTimeClick }) => {
    return (
      <CourseNotesItemWrapper>
        <CourseNotesItemTime
          data-testid='course-notes-timeBtn'
          onClick={onTimeClick}
        >
          {time}
        </CourseNotesItemTime>

        <CourseNotesCenter>
          <CourseNotesCenterTop>
            <div>
              <CourseNotesItemTitle>{title}</CourseNotesItemTitle>
              <CourseNotesItemSubtitle data-testid='course-notes-subtitle'>
                {' '}
                {subtitle}{' '}
              </CourseNotesItemSubtitle>
            </div>
            <CourseNotesItemRight>
              <CourseNotesItemBtn
                data-testid={`course-notes-edit-${id}`}
                onClick={editNote.bind(null, { id, text })}
              >
                <SvgIcon fill='#000' size='14px' iconName='edit-icon' />
              </CourseNotesItemBtn>
              <CourseNotesItemBtn
                data-testid='course-notes-delete'
                onClick={deleteNote.bind(null, id)}
              >
                <SvgIcon fill='#000' size='14px' iconName='delete-icon' />
              </CourseNotesItemBtn>
            </CourseNotesItemRight>
          </CourseNotesCenterTop>
          <CourseNotesItemText data-testid='course-notes-text'>
            {text}
          </CourseNotesItemText>
        </CourseNotesCenter>
      </CourseNotesItemWrapper>
    );
  }
);

export { CourseNotesItem };
