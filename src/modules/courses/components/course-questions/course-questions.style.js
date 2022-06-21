import styled from 'styled-components';
import IconLike from '../../../../assets/img/icon-like.svg';
import IconLiked from '../../../../assets/img/icon-like-solid.svg';
import IconBottomArrow from '../../../../assets/img/icon-bottom-arrow.svg';
import IconTopArrow from '../../../../assets/img/icon-top-arrow.svg';
import IconPlus from '../../../../assets/img/icon-plus.svg';
import IconSearch from '../../../../assets/img/search.svg';

const fontSizes = `
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

const imageStyles = `
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CourseQuestionsContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SearchInputWrapper = styled.div`
  margin-left: 5.5rem;
  input {
    width: ${props => (props.isInputOpen ? '18.5rem' : '3rem')};
    line-height: 1.8rem;
    font-size: 1.4rem;
    height: 3rem;
    transition: width 250ms;

    &:focus {
      width: 18.5rem;
    }
  }

  span:last-child {
    top: 50%;
    right: 1rem;
    display: flex;
    transform: translateY(-50%);
    background-color: #fff;

    &:focus input {
      width: 18.5rem;
    }
  }
`;

export const CourseQuestionsFormContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 50px;

  &:not(:first-child) {
    margin-left: 0px;
  }
`;

export const CourseQuestionsReplyedUser = styled.img`
  ${imageStyles}
  margin-right: 16px;
`;

export const CourseRepliesAnswers = styled.div`
  display: ${props => (props.isShow ? 'block' : 'block')};
`;

export const CourseRepliesContainer = styled.div``;

export const CourseQuestionsTitle = styled.h2`
  ${fontSizes}
  font-size: 16px;
  line-height: 20px;
`;

export const CourseQuestionCount = styled.span`
  ${fontSizes}
  font-size: 16px;
  line-height: 20px;
`;

// QUESTIONS AND ANSWERS CHAT

export const CourseQuestionsChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const CourseQuestionsUserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const CourseQuestionsCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CourseQuestionsInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CourseQuestionsCommentedUserImg = styled.img`
  ${imageStyles}
`;

export const CourseQuestionsInfo = styled.div`
  margin-left: 16px;
`;

export const CourseQuestionsUserQuestion = styled.h3`
  ${fontSizes}
  margin-bottom: 4px;
`;

export const CourseQuestionsUserName = styled.p``;

export const CourseQuestionsDate = styled.time`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const CourseQuestionsLike = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseQuestionsLikeCount = styled.span`
  margin-right: 7px;
`;

export const CourseQuestionsLikeBtn = styled.button`
  width: 18px;
  height: 18px;
  border: 0;
  background-color: transparent;
  background-image: ${props =>
    props.isLike ? `url(${IconLiked})` : `url(${IconLike})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

// CHATS ANSWERS

export const CourseAnswersShow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  margin-bottom: 24px;
`;

export const CourseQuestionsAnswerBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  border: 0;
  padding: 0;
  line-height: 16px;
  color: #ba8d5b;
  background-color: transparent;

  &::before {
    display: block;
    content: '';
    width: 5px;
    height: 7px;
    padding-right: 14px;
    background-color: transparent;
    background-image: ${props =>
      props.show ? `url(${IconTopArrow})` : `url(${IconBottomArrow})`};
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

export const CourseQuestionsAnswerCount = styled.strong``;

export const AskQuestionBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 22px;
  color: #ba8d5b;
  border: 0;
  background-color: transparent;
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background-image: ${props =>
      props.isAskQuestion ? `url(${IconPlus})` : `url(${IconSearch})`};
    background-repeat: no-repeat;
    margin-left: 9px;
  }
`;
