import { faker } from '@faker-js/faker';
import { fireEvent, render, screen } from '@testing-library/react';
import { DropDownComponent } from './drop-down.component';

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
  open: true,
  defaultOption: options[0].value
};

const setup = props => {
  return render(<DropDownComponent {...props} />);
};

const handleChange = jest.fn();

describe('Select Component', () => {
  test('Should change select option', () => {
    setup({ ...TEST_PROPS, onChange: handleChange });
    expect(screen.getByTestId('field-dropdown').textContent).toBe(
      TEST_PROPS.options[0].label
    );
    fireEvent.click(screen.getByTestId('field-dropdown'));
    fireEvent.click(
      screen.getByTestId('field-dropdown-option-' + TEST_PROPS.options[1].value)
    );
    expect(handleChange).toHaveBeenCalledWith(TEST_PROPS.options[1].value);
  });
});
