import { hoc } from '@utils/hoc';
import {
  CourseQuestionsCommentedUserImg,
  CourseQuestionsCommentWrapper,
  CourseQuestionsDate,
  CourseQuestionsInfo,
  CourseQuestionsInfoWrapper,
  CourseQuestionsLike,
  CourseQuestionsLikeBtn,
  CourseQuestionsLikeCount,
  CourseQuestionsUserName,
  CourseQuestionsUserQuestion,
  CourseQuestionsUserWrapper
} from '../../course-questions.style';
import { timeSince } from '@utils/date-format-time';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { coursesActions } from '@courses/store';

const useCommentProps = ({ item }) => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const handleClickLike = e => {
    e.preventDefault();
    setIsLike(!isLike);
    const payload = {
      course_id: id,
      question_id: item.id
    };
    dispatch(
      coursesActions.likeCourseQuestion({
        data: payload,
        callback: ({ count, is_active }) => {
          setCount(count);
          setIsLike(is_active);
        }
      })
    );
  };

  useEffect(() => {
    if (!item) return;

    // TODO: backend
    // ----------------------
    setIsLike(item.is_active);
    setCount(item.count);
  }, [item]);

  return {
    isLike,
    handleClickLike,
    count
  };
};

export const Comment = hoc(
  useCommentProps,
  ({ item, isLike, handleClickLike, count }) => {
    return (
      <CourseQuestionsUserWrapper>
        <CourseQuestionsCommentWrapper>
          <CourseQuestionsInfoWrapper>
            <CourseQuestionsCommentedUserImg
              src={item.user.image.url}
              alt='student'
            />
            <CourseQuestionsInfo>
              <CourseQuestionsUserQuestion>
                {item.user.name}
                <CourseQuestionsDate>
                  {timeSince(new Date(item.created_at))} oldin
                </CourseQuestionsDate>
              </CourseQuestionsUserQuestion>
              <CourseQuestionsUserName>{item.title}</CourseQuestionsUserName>
            </CourseQuestionsInfo>
          </CourseQuestionsInfoWrapper>

          <CourseQuestionsLike>
            <CourseQuestionsLikeCount>{count}</CourseQuestionsLikeCount>
            <CourseQuestionsLikeBtn isLike={isLike} onClick={handleClickLike} />
          </CourseQuestionsLike>
        </CourseQuestionsCommentWrapper>
      </CourseQuestionsUserWrapper>
    );
  }
);
