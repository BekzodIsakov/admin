import React from 'react';
import { hoc } from '@utils/hoc';
import { useCourseNotesProps } from './course-notes.props';
import { Button } from '@components/atoms/index';
import { DropDownComponent } from '@components/drop-down/drop-down.component';
import { Textarea } from '@components/atoms/textarea';

import {
  CourseNotesContainer,
  CourseNotesTop,
  CourseNotesCount,
  CourseNotesFilterWrapper,
  CourseNotesFilterTitle,
  CourseNotesBottom,
  CourseNotesForm,
  CancelSendNoteWrapper,
  CancelSendNotes
} from './course-notes.style';

import { CourseNotesItem } from './course-notes-item/course-notes-item.component';
import {
  CourseNotesCenter,
  CourseNotesItemTime,
  CourseNotesItemWrapper
} from './course-notes-item/course-notes-item.style';

/**
 * <CourseNotes />
 */

const CourseNotes = hoc(
  useCourseNotesProps,
  ({
    filterOptions,
    courseAllNotes,
    isNoteFocused,
    onFocusTextarea,
    textareaRef,
    handleAddBtn,
    time,
    onSubmit,
    formRef,
    cancelBtn,
    secondsFormat,
    isEditableNow,
    changeFilter,
    handleTimeClick
  }) => {
    return (
      <CourseNotesContainer>
        {courseAllNotes?.length > 0 && (
          <CourseNotesTop>
            <CourseNotesCount>
              {courseAllNotes.length} ta eslatma mavjud
            </CourseNotesCount>

            <CourseNotesFilterWrapper>
              <CourseNotesFilterTitle>Saralash:</CourseNotesFilterTitle>

              <DropDownComponent
                defaultOption='simple'
                options={filterOptions}
                onChange={changeFilter}
              />
            </CourseNotesFilterWrapper>
          </CourseNotesTop>
        )}

        <CourseNotesForm ref={formRef} onSubmit={onSubmit}>
          <CourseNotesItemWrapper>
            {isNoteFocused && <CourseNotesItemTime>{time}</CourseNotesItemTime>}

            <CourseNotesCenter>
              <Textarea
                placeholder={`${time}-ga yangi izoh qo'shing`}
                onFocus={onFocusTextarea}
                textareaRef={textareaRef}
                data-testid='notes-textarea'
                suffix={
                  !isNoteFocused && (
                    <Button
                      variant='primary'
                      buttonType='roundButton'
                      size='large'
                      iconName='plus-icon'
                      onClick={handleAddBtn}
                    />
                  )
                }
              />
            </CourseNotesCenter>
          </CourseNotesItemWrapper>

          {isNoteFocused && (
            <CancelSendNoteWrapper>
              <CancelSendNotes onClick={cancelBtn}>
                Bekor qilish
              </CancelSendNotes>

              {isEditableNow.available ? (
                <Button
                  variant='primary'
                  buttonType='button'
                  type='submit'
                  data-testid='edit-note'
                >
                  O'zgartirish
                </Button>
              ) : (
                <Button
                  variant='primary'
                  buttonType='button'
                  type='submit'
                  data-testid='send-note'
                >
                  Jo'natish
                </Button>
              )}
            </CancelSendNoteWrapper>
          )}
        </CourseNotesForm>

        <CourseNotesBottom>
          {courseAllNotes.length > 0 ? (
            courseAllNotes.map((item, index) => (
              <CourseNotesItem
                time={secondsFormat(item.position)}
                onTimeClick={handleTimeClick.bind(null, item)}
                id={item.id}
                key={index}
                title={item?.lesson?.title}
                subtitle={item?.chapter?.title}
                text={item?.title}
                lessonId={item.lesson.id}
                chapterId={item.chapter.id}
              ></CourseNotesItem>
            ))
          ) : (
            <CourseNotesFilterTitle>
              Hozircha hech qanday eslatmalar mavjud emas
            </CourseNotesFilterTitle>
          )}
        </CourseNotesBottom>
      </CourseNotesContainer>
    );
  },
  'CourseNotes'
);

export { CourseNotes };
