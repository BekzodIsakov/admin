import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { BlurredText } from './blurred-text.component';

describe('Active Banner Context', () => {
  test('Should render BlurredText component', async () => {
    const { asFragment } = customRender(<BlurredText />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('blurred-text-component')).toBeInTheDocument();
  });
});
