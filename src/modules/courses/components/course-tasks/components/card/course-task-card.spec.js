import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';

import { Card } from './card.component';

const setup = ({
  children,
  title,
  subtitle,
  link,
  active,
  norm,
  pending,
  button
}) => {
  return customRender(
    <Card
      children={children}
      title={title}
      subtitle={subtitle}
      link={link}
      active={active}
      norm={norm}
      pending={pending}
      button={button}
    />
  );
};

test('Course task card', () => {
  const { asFragment } = setup({
    children: 'children',
    title: 'title',
    subtitle: 'subtitle',
    link: false,
    active: false,
    norm: false,
    pending: false,
    button: ''
  });
  expect(asFragment).toMatchSnapshot();
});

test('course task card check props', () => {
  setup({
    children: 'children',
    title: 'title',
    subtitle: 'subtitle',
    link: false,
    active: false,
    norm: false,
    pending: false,
    button: ''
  });
  const courseTaskCardTitle = screen.getByTestId('course-task-item-title');
  const courseTaskCardText = screen.getByTestId('course-task-item-subtitle');
  expect(courseTaskCardTitle && courseTaskCardText).toBeTruthy();
});

test('course task card check props with link', () => {
  setup({
    children: 'children',
    title: 'title',
    subtitle: 'subtitle',
    link: '/',
    active: false,
    norm: false,
    pending: false,
    button: ''
  });
  const courseTaskCardTitle = screen.getByTestId('course-task-linkTitle');
  const courseTaskCardText = screen.getByTestId('course-task-linkSubtitle');
  expect(courseTaskCardTitle && courseTaskCardText).toBeTruthy();
});
