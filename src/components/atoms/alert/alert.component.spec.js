import { screen, within } from '@testing-library/react';
import { customRender } from '@test-utils';
import { Alert } from './alert.component';
import 'jest-styled-components';
import '@testing-library/jest-dom';

const setup = ({ children, ...props }) => {
  return customRender(<Alert {...props}>{children}</Alert>);
};

test('Render Atom component', () => {
  const { asFragment } = setup({
    children: 'Child element',
    variant: 'danger'
  });
  expect(asFragment()).toMatchSnapshot();
});

test('Examination of children', () => {
  setup({ children: 'Child element', variant: 'danger' });

  const { getByText } = within(screen.getByTestId('alert-container'));
  expect(getByText(`Child element`)).toBeInTheDocument();
});

test('Should variant normal', () => {
  setup({ children: 'Child element', variant: 'danger' });
  const colorNormal = 'rgba(255,0,0,1)';
  expect(screen.getByTestId('alert-container')).toHaveStyle(
    `border-color: ${colorNormal}`
  );
});

test('Should variant light', () => {
  setup({ children: 'Child element', variant: 'danger' });
  const colorLight = 'rgba(255, 0, 0, 0.5)';
  expect(screen.getByTestId('alert-container')).toHaveStyle(
    `background-color: ${colorLight}`
  );
});
