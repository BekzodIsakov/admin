import { customRender } from '@test-utils/helpers';
// import { screen } from '@testing-library/react';
import { ErrorBoundary } from './error-boundary.component';

test('just', () => {
  const { asFragment } = customRender(<ErrorBoundary />);
  expect(asFragment()).toMatchSnapshot();
});

// describe('Common Context', () => {
//   test('Should render ErrorBoundary component', async () => {
//     const ThrowError = () => {
//       throw new Error('Error');
//     };
//     const { asFragment } = customRender(
//       <ErrorBoundary>
//         <ThrowError />
//       </ErrorBoundary>
//     );
//     expect(asFragment()).toMatchSnapshot();
//     expect(screen.getByTestId('error-component')).toBeInTheDocument();
//   });
// });
