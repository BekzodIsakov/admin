import { renderHook } from '@testing-library/react-hooks';
import { useInputProps } from './input.props';

test('input component properties', () => {
  const handleChange = jest.fn();
  const TEST_MESSAGE = 'Test message';

  const EVENT = { target: { value: TEST_MESSAGE } };
  const { result } = renderHook(() =>
    useInputProps({ onChange: handleChange, name: 'test-props', value: '' })
  );
  result.current._onChange(EVENT);
  expect(handleChange).toHaveBeenCalledWith(TEST_MESSAGE);
});
