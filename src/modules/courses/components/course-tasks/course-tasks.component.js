import React from 'react';
import { hoc } from '@utils/hoc';

import {
  BAD_SCORE,
  NORMAL_SCORE,
  PENDING_STATUS,
  REJECT_STATUS,
  useCourseTasksProps
} from './course-tasks.props';
import { CourseTasksContainer } from './course-tasks.style';
import {
  Title,
  Paragraph,
  StyledNumber,
  ResponsiveFlexWrapper
} from './components/atoms.style';
// import { HorizontalRule } from '@components/atoms/horizontal-rule/horizontal-rule.style';
import { Card } from './components/card/card.component';
import { FlexWrapper } from '@components/layouts/flex-wrapper/flex-wrapper.component';
import { SvgIcon } from '@components/atoms/index';
import { Textarea } from '@components/atoms/textarea';
import { Button } from '@components/atoms';
import {
  CourseTaskSendWrapper,
  CourseTaskSendFile,
  CourseTaskSendInput,
  CourseTaskSendBtn,
  CourseTasksSendHolder,
  CourseTaskHomeWorkFile,
  CourseTaskDeleteHomeWorkFile,
  CourseTaskFileTitle,
  SubmissionsWrapper
} from './course-tasks.style';

/**
 * <CourseTasks />
 */
const CourseTasks = hoc(
  useCourseTasksProps,
  ({
    fileRef,
    handleGetFileChange,
    handleDeleteSelectFile,
    homeWorkFile,
    courseHomeWorks,
    theme,
    courseLoading,
    commentRef,
    onSubmit,
    isShowTextArea,
    courseSubmission,
    handleAllowToResendSubmission
  }) => {
    return (
      <CourseTasksContainer>
        <FlexWrapper direction='column' gap='2.4rem'>
          <div>
            {courseHomeWorks ? (
              <div>
                {[PENDING_STATUS, REJECT_STATUS].includes(
                  courseSubmission?.status
                ) && (
                  <Card
                    pending={true}
                    title={
                      PENDING_STATUS === courseSubmission?.status
                        ? 'Sizning vazifangiz tekshirish bosqichida'
                        : 'Qaytadan urinib koring'
                    }
                    button={
                      REJECT_STATUS === courseSubmission?.status ? (
                        <div onClick={handleAllowToResendSubmission}>
                          <Button
                            buttonType='button'
                            variant='secondary'
                            type='button'
                            size='large'
                          >
                            Qayta topshirish
                          </Button>
                        </div>
                      ) : (
                        ''
                      )
                    }
                  >
                    <StyledNumber pending={true} style={{ fontSize: '16px' }}>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20 3C20.2652 3 20.5196 2.89464 20.7071 2.70711C20.8946 2.51957 21 2.26522 21 2C21 1.73478 20.8946 1.48043 20.7071 1.29289C20.5196 1.10536 20.2652 1 20 1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2C3 2.26522 3.10536 2.51957 3.29289 2.70711C3.48043 2.89464 3.73478 3 4 3H5.049C5.195 4.836 5.792 8.75 8.243 11C5.658 13.511 5.132 18.734 5.027 21H4C3.73478 21 3.48043 21.1054 3.29289 21.2929C3.10536 21.4804 3 21.7348 3 22C3 22.2652 3.10536 22.5196 3.29289 22.7071C3.48043 22.8946 3.73478 23 4 23H20C20.2652 23 20.5196 22.8946 20.7071 22.7071C20.8946 22.5196 21 22.2652 21 22C21 21.7348 20.8946 21.4804 20.7071 21.2929C20.5196 21.1054 20.2652 21 20 21H18.973C18.868 18.736 18.342 13.513 15.757 11C18.208 8.748 18.805 4.834 18.951 3H20ZM13.58 10.126C13.4211 10.2142 13.2893 10.3441 13.1987 10.5016C13.1081 10.6591 13.0621 10.8383 13.0657 11.02C13.0693 11.2017 13.1223 11.379 13.2191 11.5328C13.3159 11.6866 13.4528 11.8111 13.615 11.893C16.052 13.121 16.815 18.204 16.97 21H7.03C7.181 18.2 7.948 13.121 10.385 11.893C10.5472 11.8111 10.6841 11.6866 10.7809 11.5328C10.8777 11.379 10.9307 11.2017 10.9343 11.02C10.9379 10.8383 10.8919 10.6591 10.8013 10.5016C10.7107 10.3441 10.5789 10.2142 10.42 10.126C7.881 8.717 7.227 4.844 7.058 3H16.942C16.773 4.844 16.119 8.717 13.58 10.126ZM12 13C12 13 15 15.4 15 16.6V20H9V16.6C9 15.4 12 13 12 13Z'
                          fill='#BA8D5B'
                        />
                      </svg>
                    </StyledNumber>
                  </Card>
                )}
                {!!courseSubmission?.score && (
                  <div style={{ marginBottom: '10px' }}>
                    <Card
                      title={`Vazifani ${courseSubmission?.score}
                        baho bilan yakunladingiz`}
                      active={courseSubmission?.score <= BAD_SCORE}
                      norm={courseSubmission?.score <= NORMAL_SCORE}
                    >
                      <StyledNumber
                        active={courseSubmission?.score <= BAD_SCORE}
                        norm={courseSubmission?.score <= NORMAL_SCORE}
                      >
                        {courseSubmission?.score}
                      </StyledNumber>
                    </Card>
                  </div>
                )}

                {courseSubmission && (
                  <SubmissionsWrapper>
                    <Title>Sizning javobingiz</Title>
                    <ResponsiveFlexWrapper justify='space-between' gap='2.4rem'>
                      <Paragraph>{courseSubmission?.title}</Paragraph>
                      <FlexWrapper direction='column' gap='1.4rem'>
                        {courseSubmission?.attachment?.title ? (
                          <Card
                            title={courseSubmission?.attachment?.title}
                            subtitle={courseSubmission?.attachment?.size}
                            link={courseSubmission?.attachment?.url}
                          >
                            <SvgIcon
                              iconName='file-icon'
                              iconColor={theme.colors.brown}
                            />
                          </Card>
                        ) : (
                          <h4>Darsga file biriktirilmagan</h4>
                        )}
                      </FlexWrapper>
                    </ResponsiveFlexWrapper>
                  </SubmissionsWrapper>
                )}

                <FlexWrapper
                  gap='1.2rem'
                  direction='column'
                  style={{
                    marginTop: courseSubmission ? '0' : '24px',
                    paddingTop: courseSubmission ? '24px' : '0'
                  }}
                >
                  <Title>Uyga vazifa</Title>
                  <ResponsiveFlexWrapper justify='space-between' gap='2.4rem'>
                    <Paragraph>{courseHomeWorks?.title}</Paragraph>
                    <FlexWrapper direction='column' gap='1.4rem'>
                      {courseHomeWorks?.attachments?.length > 0 ? (
                        courseHomeWorks?.attachments.map((item, index) => (
                          <Card
                            title={item?.title}
                            subtitle={item?.size}
                            link={item.file.url}
                            key={index}
                          >
                            <SvgIcon
                              iconName='file-icon'
                              iconColor={theme.colors.brown}
                            />
                          </Card>
                        ))
                      ) : (
                        <h4>Darsga file biriktirilmagan</h4>
                      )}
                    </FlexWrapper>
                  </ResponsiveFlexWrapper>
                </FlexWrapper>
              </div>
            ) : (
              <h4>Darsga uyga vazifa biriktirilmagan</h4>
            )}

            <CourseTasksSendHolder>
              {homeWorkFile.length > 0 ? (
                <CourseTaskHomeWorkFile>
                  <CourseTaskDeleteHomeWorkFile
                    onClick={handleDeleteSelectFile}
                  />
                  <CourseTaskFileTitle>
                    {fileRef.current.files[0].name}
                  </CourseTaskFileTitle>
                </CourseTaskHomeWorkFile>
              ) : (
                ''
              )}

              {isShowTextArea && (
                <CourseTaskSendWrapper
                  active={homeWorkFile.length > 0}
                  onSubmit={onSubmit}
                >
                  <Textarea
                    placeholder='Uyga vazifaga izohlar yozing'
                    width='88%'
                    textareaRef={commentRef}
                    suffix={
                      <FlexWrapper align='center'>
                        <CourseTaskSendInput
                          ref={fileRef}
                          type='file'
                          id='task-file'
                          onChange={handleGetFileChange}
                        />
                        <CourseTaskSendFile htmlFor='task-file'>
                          <SvgIcon
                            fill='#BA8D5B'
                            size='20px'
                            iconName='paper_clip-icon'
                            stoke
                          />
                        </CourseTaskSendFile>
                        <CourseTaskSendBtn disabled={courseLoading}>
                          Yuborish
                        </CourseTaskSendBtn>
                      </FlexWrapper>
                    }
                  />
                </CourseTaskSendWrapper>
              )}
            </CourseTasksSendHolder>
          </div>
        </FlexWrapper>
      </CourseTasksContainer>
    );
  },
  'CourseTasks'
);

export { CourseTasks };
