import { fireEvent, screen } from '@testing-library/react';
import { Input } from './input.component';
import 'jest-styled-components';
import { customRender } from '@test-utils/helpers';

const setup = ({ onChange }) => {
  return customRender(<Input onChange={onChange} name='test-input' value='' />);
};

const handleChange = jest.fn();
const TEST_MESSAGE = 'Test message';

const EVENT = { target: { value: TEST_MESSAGE } };

test('Render Input component', () => {
  const { asFragment } = setup({});
  expect(asFragment()).toMatchSnapshot();
});

test('Should change value', () => {
  setup({ onChange: handleChange });
  const input = screen.getByTestId('input');
  expect(input.value).toBe('');
  fireEvent.change(input, EVENT);
  expect(handleChange).toHaveBeenCalledWith(TEST_MESSAGE);
});
