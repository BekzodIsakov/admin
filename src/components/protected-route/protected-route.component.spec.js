import { renderWithRouter } from '@test-utils/helpers';
import { screen } from '@testing-library/react';
import { ProtectedRoute } from './protected-route.component';

const Dashboard = () => <div data-testid='protected-route'>Dashboard</div>;

describe('ProtectedRoute component', () => {
  test('should render ProtectedRoute component', () => {
    renderWithRouter(
      <ProtectedRoute.Original profile={true} component={Dashboard} />
    );

    let protectedRoute = screen.getByTestId('protected-route');
    expect(protectedRoute).toBeInTheDocument();
  });

  test('should redirect to login', () => {
    const { history } = renderWithRouter(
      <ProtectedRoute.Original profile={false} component={Dashboard} />
    );
    expect(history.location.pathname).toEqual('/login');
  });
});
