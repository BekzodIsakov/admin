import { customRender } from '@test-utils/helpers';
import { screen, fireEvent } from '@testing-library/react';

import { CourseNotesItem } from './course-notes-item.component';

const setup = ({
  time,
  title,
  subtitle,
  text,
  id,
  deleteNote,
  editNote,
  onTimeClick
}) => {
  return customRender(
    <CourseNotesItem
      time={time}
      title={title}
      subtitle={subtitle}
      text={text}
      id={id}
      deleteNote={deleteNote}
      editNote={editNote}
      onTimeClick={onTimeClick}
    />
  );
};

const allFn = jest.fn();

test('course notes items', () => {
  const { asFragment } = setup({
    time: 'time',
    title: 'title',
    subtitle: 'subtitle',
    text: 'text',
    id: '1',
    deleteNote: allFn,
    editNote: allFn,
    onTimeClick: allFn
  });
  expect(asFragment).toMatchSnapshot();
});

const TEST_MESSAGE = 'Test message';
const TESTID = '1';
const EVENT = { target: { value: TEST_MESSAGE } };

test('Course notes test props', () => {
  setup({
    time: 'time',
    title: 'title',
    subtitle: 'subtitle',
    text: 'text',
    id: TESTID,
    deleteNote: allFn,
    editNote: allFn,
    onTimeClick: allFn
  });
  const courseNotesTitle = screen.getByRole('heading', { name: 'title' });
  const courseNotesText = screen.getByTestId('course-notes-text');
  const courseNotesSubtitle = screen.getByTestId('course-notes-subtitle');
  expect(
    courseNotesTitle && courseNotesText && courseNotesSubtitle
  ).toBeTruthy();
});

test('Course notes edit btn test test', () => {
  setup({
    time: 'time',
    title: 'title',
    subtitle: 'subtitle',
    text: 'text',
    id: TESTID,
    editNote: allFn,
    onTimeClick: allFn,
    deleteNote: allFn
  });
  const courseNotesEditBtn = screen.getByTestId(`course-notes-edit-${TESTID}`);
  fireEvent.click(courseNotesEditBtn, EVENT);
  expect(allFn).toReturn();
});

test('Course notes test delete btn', () => {
  setup({ deleteNote: allFn, editNote: allFn });
  const courseNotesDeleteBtn = screen.getByTestId('course-notes-delete');
  fireEvent.click(courseNotesDeleteBtn, EVENT);
  expect(allFn).toReturn();
});

test('Course notest test time btn', () => {
  setup({ editNote: allFn, onTimeClick: allFn, deleteNote: allFn });
  const courseTimeBtn = screen.getByTestId('course-notes-timeBtn');
  fireEvent.click(courseTimeBtn);
  expect(allFn).toReturn();
});
