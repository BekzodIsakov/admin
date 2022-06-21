import { renderHook } from '@testing-library/react-hooks';
import { useTextareaProps } from './textarea.props';

test('textarea component proporties', () => {
  const handleChange = jest.fn();
  const MESSAGE = 'test message';

  const EVENT = { target: { value: MESSAGE } };

  const { result } = renderHook(() =>
    useTextareaProps({ onChange: handleChange })
  );
  result.current._onChange(EVENT);
  expect(handleChange).toHaveBeenCalledWith(MESSAGE);
});
