import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { FlexWrapper } from './flex-wrapper.component';

describe('FlexWrapper component', () => {
  test('Render FlexWrapper component', () => {
    const { asFragment } = render(<FlexWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Change flex direction', () => {
    render(<FlexWrapper direction='column' data-testid='flex-wrapper' />);
    const component = screen.getByTestId('flex-wrapper');
    expect(component).toHaveStyleRule('flex-direction', 'column');
  });

  test('Change justify-content', () => {
    render(<FlexWrapper justify='center' data-testid='flex-wrapper' />);
    const component = screen.getByTestId('flex-wrapper');
    expect(component).toHaveStyleRule('justify-content', 'center');
  });

  test('Change align-items', () => {
    render(<FlexWrapper align='flex-end' data-testid='flex-wrapper' />);
    const component = screen.getByTestId('flex-wrapper');
    expect(component).toHaveStyleRule('align-items', 'flex-end');
  });

  test('Change gap', () => {
    render(<FlexWrapper gap='2rem' data-testid='flex-wrapper' />);
    const component = screen.getByTestId('flex-wrapper');
    expect(component).toHaveStyleRule('gap', '2rem');
  });
});
