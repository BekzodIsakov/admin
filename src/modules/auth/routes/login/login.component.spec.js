import { customRender } from '@test-utils/helpers';
import { Login } from './login.component';

test('Should render Login component', () => {
  const { asFragment } = customRender(<Login />);

  expect(asFragment).toMatchSnapshot();
});
