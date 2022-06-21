import { screen, fireEvent } from '@testing-library/react';
import { customRender } from '@test-utils';
import { Error } from './error.component';
import 'jest-styled-components';

const handleRedirectToHome = jest.fn();
const ERROR_MESSAGE = 'Mock Error Message';

const setup = props => customRender(<Error {...props} />, {});

test('Should render Error component', () => {
  setup({
    errorText: ERROR_MESSAGE,
    handleClick: handleRedirectToHome
  });
});

test('should render error message', () => {
  setup({
    errorText: ERROR_MESSAGE,
    handleClick: handleRedirectToHome
  });
  const errorElement = screen.getByTestId('error-text');
  expect(errorElement.innerHTML).toBe(ERROR_MESSAGE);
});

test('should handle home button click event', () => {
  setup({
    errorText: ERROR_MESSAGE,
    handleClick: handleRedirectToHome
  });
  const toHomeButton = screen.getByTestId('to-home-button');
  fireEvent.click(toHomeButton);
  expect(handleRedirectToHome).toHaveBeenCalled();
});
