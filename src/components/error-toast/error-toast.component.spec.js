import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { ErrorToast } from './error-toast.component';

describe('Atoms Context', () => {
  test('Should render ErrorToast component', async () => {
    const { asFragment } = customRender(
      <ErrorToast data-testid='error-toast-component' />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('error-toast-component')).toBeInTheDocument();
  });
});
