import { hoc } from '@utils/hoc';
import { useCourseQuestionsProps } from './course-questions.props';
import {
  CourseQuestionCount,
  CourseQuestionsContainerTop,
  CourseQuestionsFormContent,
  CourseQuestionsTitle,
  SearchInputWrapper
} from './course-questions.style';
import { DropDownComponent } from '@components/drop-down';
import { CourseNotesFilterTitle } from '../course-notes/course-notes.style';
import { CourseComments } from './course-comments/course-comments.components';
import { Button } from '@components/atoms/index';
import { Textarea } from '@components/atoms/textarea/textarea.component';
import { Input } from '@components/atoms/Input';
import { SvgIcon } from '@components/atoms/icons';
import { FlexWrapper } from '@components/layouts/flex-wrapper';

/**
 * <CourseQuestions />
 */
const CourseQuestions = hoc(
  useCourseQuestionsProps,
  ({
    comments,
    filterOptions,
    textareaRef,
    addQuestion,
    handleChangeSort,
    sort,
    searchQuestion,
    setSearch,
    searChInputRef,
    isSearchInputOpen,
    handleOpenSearchInput,
    handleFocusChildInput
  }) => {
    return (
      <div>
        <CourseQuestionsContainerTop>
          <CourseQuestionsTitle>
            <CourseQuestionCount>
              {comments?.length
                ? comments?.length + 'ta savol mavjud'
                : 'savollar mavjud emas'}
            </CourseQuestionCount>
          </CourseQuestionsTitle>

          <FlexWrapper align='center'>
            <CourseNotesFilterTitle>Saralash:</CourseNotesFilterTitle>
            <DropDownComponent
              value={sort}
              onChange={handleChangeSort}
              options={filterOptions}
              defaultOption='desc'
            />
            <SearchInputWrapper
              onClick={handleFocusChildInput}
              isInputOpen={isSearchInputOpen}
              className='search-input-wrapper'
            >
              <Input
                onChange={value => setSearch(value)}
                placeholder='Savol izlash'
                suffix={
                  <SvgIcon
                    iconName='search-icon'
                    size='15px'
                    onClick={handleOpenSearchInput}
                  />
                }
                inputRef={searChInputRef}
              />
            </SearchInputWrapper>
          </FlexWrapper>
        </CourseQuestionsContainerTop>
        <CourseQuestionsFormContent>
          <Textarea
            textareaRef={textareaRef}
            placeholder={"Kurs bo'yicha barcha savollaringizni qoldiring"}
            suffix={
              <Button
                buttonType='button'
                onClick={addQuestion}
                variant='primary'
                size='large'
              >
                Yuborish
              </Button>
            }
          />
        </CourseQuestionsFormContent>
        <CourseComments items={comments} sort={sort} />
      </div>
    );
  }
);

export { CourseQuestions };
