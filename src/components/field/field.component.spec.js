import { faker } from '@faker-js/faker';
import { customRender } from '@test-utils/helpers';
import { fireEvent, screen } from '@testing-library/react';
import { Field } from './field.component';

const options = [
  {
    value: 'male',
    label: 'Erkak'
  },
  {
    value: 'female',
    label: 'Ayol'
  }
];

const SELECT_PROPS = {
  options,
  name: 'test-select',
  defaultOption: options[0].value,
  onChange: jest.fn()
};

const INPUT_PROPS = {
  name: 'test-input',
  value: '',
  onChange: jest.fn()
};

const TEXTAREA_PROPS = {
  name: 'test-textarea',
  value: '',
  onChange: jest.fn()
};

const EVENT = {};

EVENT.target = {
  value: faker.random.words()
};

describe('Atoms Field', () => {
  test('Should render Input component', async () => {
    const { asFragment } = customRender(<Field.Input {...INPUT_PROPS} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  test('Should render Select component', async () => {
    const { asFragment } = customRender(<Field.Select {...SELECT_PROPS} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('field-select')).toBeInTheDocument();
  });

  test('Should render Textarea component', async () => {
    const { asFragment } = customRender(<Field.Textarea {...TEXTAREA_PROPS} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('textarea-field')).toBeInTheDocument();
  });

  test('Should change Input component', async () => {
    customRender(<Field.Input {...INPUT_PROPS} />);
    fireEvent.change(screen.getByTestId('input'), EVENT);
    expect(INPUT_PROPS.onChange).toHaveBeenCalledWith(EVENT.target.value);
  });

  test('Should change Select component', async () => {
    customRender(<Field.Select {...SELECT_PROPS} />);
    fireEvent.click(screen.getByTestId('field-select'));
    fireEvent.click(
      screen.getByTestId('field-select-option-' + SELECT_PROPS.options[1].value)
    );
    expect(SELECT_PROPS.onChange).toHaveBeenCalledWith(
      SELECT_PROPS.options[1].value
    );
  });

  test('Should change Textarea component', async () => {
    customRender(<Field.Textarea {...TEXTAREA_PROPS} />);
    fireEvent.change(screen.getByTestId('textarea-field'), EVENT);
    expect(TEXTAREA_PROPS.onChange).toHaveBeenCalledWith(EVENT.target.value);
  });
});
