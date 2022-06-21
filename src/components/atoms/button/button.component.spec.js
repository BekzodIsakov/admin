import 'jest-styled-components';
import '@testing-library/jest-dom';
import { customRender } from '@test-utils/helpers';
const { screen } = require('@testing-library/react');

const { Button } = require('./button.component');

const TEST_PROPS = {
  children: 'Some text',
  variant: 'primary',
  size: 'small',
  iconName: 'arrow',
  iconColor: '#fff'
};

const setup = ({ children, variant, size, iconName, iconColor }) => {
  return customRender(
    <Button
      variant={variant}
      size={size}
      iconName={iconName}
      iconColor={iconColor}
      data-testid='button'
      buttonType='button'
    >
      {children}
    </Button>
  );
};

test('Render Button component', () => {
  const { asFragment } = setup(TEST_PROPS);
  expect(asFragment()).toMatchSnapshot();
});

test('Should have children text', () => {
  setup(TEST_PROPS);
  const element = screen.getByTestId('button');
  // eslint-disable-next-line
  expect(element).toHaveTextContent('Some text');
});
