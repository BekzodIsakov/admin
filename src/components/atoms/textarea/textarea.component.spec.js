import { fireEvent, screen } from '@testing-library/react';
import { customRender } from '@test-utils';
import { Textarea } from './textarea.component';
import 'jest-styled-components';
import '@testing-library/jest-dom';

const setup = ({ width, rounded, placeholder, onChange }) => {
  return customRender(
    <Textarea
      width={width}
      rounded={rounded}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const handleChange = jest.fn();
const MESSAGE = 'test message';

const EVENT = { target: { value: MESSAGE } };

test('Render Textarea component', () => {
  const { asFragment } = setup({
    width: '100%',
    rounded: '5px',
    placeholder: 'placeholder'
  });
  expect(asFragment).toMatchSnapshot();
});

test('Render width', () => {
  setup({
    width: '100%'
  });
  expect(screen.getByTestId('textarea-field')).toHaveStyle('width: 100%');
});

test('Render rounded', () => {
  setup({
    width: '100%',
    rounded: '5px'
  });
  expect(screen.getByTestId('textarea-field')).toHaveStyle(
    'width: 100%',
    'rounded: 5px'
  );
});

test('Render placeholder', () => {
  setup({
    placeholder: 'placeholder'
  });
  expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
});

test('Should change value', () => {
  setup({
    onChange: handleChange
  });
  const textarea = screen.getByTestId('textarea-field');
  expect(textarea.value).toBe('');
  fireEvent.change(textarea, EVENT);
  expect(handleChange).toHaveBeenCalledWith(MESSAGE);
});
