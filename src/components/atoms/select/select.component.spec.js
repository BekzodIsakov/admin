import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './select.component';

const options = [
  {
    value: faker.datatype.uuid(),
    label: faker.random.word()
  },
  {
    value: faker.datatype.uuid(),
    label: faker.random.word()
  }
];

const TEST_PROPS = {
  options,
  defaultOption: options[0].value
};

const setup = props => {
  return render(<Select {...props} />);
};

const handleChange = jest.fn();

describe('Select Component', () => {
  test('Should change select option', () => {
    setup({ ...TEST_PROPS, onChange: handleChange });
    expect(screen.getByTestId('field-select').textContent).toBe(
      TEST_PROPS.options[0].label
    );
    fireEvent.click(screen.getByTestId('field-select'));
    fireEvent.click(
      screen.getByTestId('field-select-option-' + TEST_PROPS.options[1].value)
    );
    expect(handleChange).toHaveBeenCalledWith(TEST_PROPS.options[1].value);
  });
});
