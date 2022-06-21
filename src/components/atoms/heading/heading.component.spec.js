import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { Heading } from './heading.component';

const setup = ({ variant, children, color }) => {
  return customRender(
    <Heading variant={variant} color={color}>
      {children}
    </Heading>
  );
};

test('Render Heading1', () => {
  const { asFragment } = setup({ variant: 'h1' });
  expect(asFragment).toMatchSnapshot();
});

test('Render Heading2', () => {
  const { asFragment } = setup({ variant: 'h2' });
  expect(asFragment).toMatchSnapshot();
});

test('Render Heading3', () => {
  const { asFragment } = setup({ variant: 'h3' });
  expect(asFragment).toMatchSnapshot();
});

test('Render Heading4', () => {
  const { asFragment } = setup({ variant: 'h4' });
  expect(asFragment).toMatchSnapshot();
});

test('Render Heading5', () => {
  const { asFragment } = setup({ variant: 'h5' });
  expect(asFragment).toMatchSnapshot();
});

test('Render Heading6', () => {
  const { asFragment } = setup({ variant: 'h6' });
  expect(asFragment).toMatchSnapshot();
});

/// test props

test('Should get props for heading 1', () => {
  setup({ variant: 'h1', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toBeTruthy();
});

test('Should get props for heading 2', () => {
  setup({ variant: 'h2', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 2 });
  expect(headingElement).toBeTruthy();
});

test('Should get props for heading 3', () => {
  setup({ variant: 'h3', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 3 });
  expect(headingElement).toBeTruthy();
});

test('Should get props for heading 4', () => {
  setup({ variant: 'h4', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 4 });
  expect(headingElement).toBeTruthy();
});

test('Should get props for heading 5', () => {
  setup({ variant: 'h5', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 5 });
  expect(headingElement).toBeTruthy();
});

test('Should get props for heading 6', () => {
  setup({ variant: 'h6', color: 'black', children: 'Title' });
  const headingElement = screen.getByRole('heading', { level: 6 });
  expect(headingElement).toBeTruthy();
});
