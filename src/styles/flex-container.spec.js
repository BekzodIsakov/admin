import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { FlexContainer } from './flex-container';

test('Should render FlexContainer component', () => {
  const { asFragment } = customRender(<FlexContainer />);

  expect(asFragment).toMatchSnapshot();
});

test('FlexContainer should get justify and align in props', () => {
  customRender(
    <FlexContainer
      data-testid='tested-flex-container'
      justify='center'
      align='center'
    />
  );
  const elem = screen.getByTestId('tested-flex-container');
  const styles = window.getComputedStyle(elem);
  expect(styles.justifyContent).toBe('center');
  expect(styles.alignItems).toBe('center');
});
