import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { coursesActions } from '@courses/store';

const filterOptions = [
  { label: 'yangi savollar', value: 'desc' },
  { label: 'eski savollar', value: 'asc' },
  { label: 'mashhur savollar', value: 'popular' }
];

export const useCourseQuestionsProps = _ => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const textareaRef = useRef();
  const searChInputRef = useRef();
  const [sort, setSort] = useState('desc');
  const [search, setSearch] = useState('');
  const [isSearchInputOpen, setIsSearchInputOpen] = useState('');
  const comments = useSelector(state => state.courses.courseQuestions);

  const handleChangeSort = value => {
    setSort(value);
  };

  const addQuestion = e => {
    e.preventDefault();
    const payload = {
      course_id: id,
      title: textareaRef.current.value
    };
    dispatch(
      coursesActions.addCourseQuestion({
        data: payload,
        callback: () => {
          dispatch(coursesActions.fetchCourseQuestions({ id, sort, search }));
          textareaRef.current.value = '';
        }
      })
    );
  };

  const handleFocusChildInput = () => {
    searChInputRef.current.focus();
  };

  const handleOpenSearchInput = () => {
    setIsSearchInputOpen(true);
  };

  const searchQuestion = () => {
    setSearch(textareaRef.current.value);
  };

  useEffect(() => {
    window.addEventListener('click', e => {
      if (!e.target.closest('.search-input-wrapper')) {
        setIsSearchInputOpen(false);
      }
    });

    return () => {
      window.removeEventListener();
    };
  }, []);

  useEffect(() => {
    if (!id) return;
    dispatch(coursesActions.fetchCourseQuestions({ id, sort, search }));
  }, [dispatch, id, sort, search]);

  return {
    comments,
    filterOptions,
    textareaRef,
    addQuestion,
    handleChangeSort,
    sort,
    searchQuestion,
    setSearch,
    isSearchInputOpen,
    handleOpenSearchInput,
    searChInputRef,
    handleFocusChildInput
  };
};
