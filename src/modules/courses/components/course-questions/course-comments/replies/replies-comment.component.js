import { Button } from '@components/atoms/index';
import { Textarea } from '@components/atoms/textarea/textarea.component';
import { hoc } from '@utils/hoc';
import { Fragment, useState } from 'react';
import {
  CourseAnswersShow,
  CourseQuestionsAnswerBtn
} from '../../course-questions.style';
import {
  RepliesContainer,
  RepliesFiledWrapper,
  RepliesUserImg
} from './replies-comments.styles';
import Student from '@assets/img/student-illustrator.png';
import { CourseCommentsContainer } from '../course-comments.style';
import { Comment } from '../comment';
import { useDispatch } from 'react-redux';
import { coursesActions } from '@courses/store';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const useRepliesProps = ({ item, sort }) => {
  const [isShowReplies, setIsShowReplies] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const replyTextareaRef = useRef();

  const toggleReplies = () => {
    setIsShowReplies(!isShowReplies);
  };

  const onSubmitReply = () => {
    const payload = {
      course_id: id,
      question_id: item.id,
      title: replyTextareaRef.current.value
    };
    dispatch(
      coursesActions.addCourseQuestionReply({
        data: payload,
        callback: () => {
          dispatch(coursesActions.fetchCourseQuestions({ id, sort }));
          replyTextareaRef.current.value = '';
        }
      })
    );
  };

  return {
    isShowReplies,
    toggleReplies,
    onSubmitReply,
    replyTextareaRef
  };
};

export const Replies = hoc(
  useRepliesProps,
  ({
    items,
    depth,
    isShowReplies,
    toggleReplies,
    onSubmitReply,
    replyTextareaRef
  }) => {
    return (
      <>
        <CourseAnswersShow>
          <CourseQuestionsAnswerBtn
            show={isShowReplies}
            onClick={toggleReplies}
          >
            {items?.length || ' '}{' '}
            {isShowReplies
              ? 'ta javobni yashirish '
              : items.length > 0
              ? "ta javobni ko'rsatish"
              : 'Javob qaytarish'}
          </CourseQuestionsAnswerBtn>
        </CourseAnswersShow>
        <RepliesContainer show={isShowReplies} depth={depth}>
          <RepliesFiledWrapper>
            <RepliesUserImg src={Student} alt='student' />
            <Textarea
              placeholder='Javob qoldiring'
              suffixPadding='10px 130px 10px 18px'
              textareaRef={replyTextareaRef}
              suffix={
                <Button
                  onClick={onSubmitReply}
                  buttonType='button'
                  variant='primary'
                  size='middle'
                >
                  Yuborish
                </Button>
              }
            />
          </RepliesFiledWrapper>
          <CourseCommentsContainer>
            {items?.map((item, idx) => {
              return (
                <Fragment key={idx + depth}>
                  <Comment item={item} />
                  {item?.replies?.length && (
                    <Replies depth={depth + 1} items={item.replies} />
                  )}
                </Fragment>
              );
            })}
          </CourseCommentsContainer>
        </RepliesContainer>
      </>
    );
  },
  'Replies'
);
