import { customRender } from '@test-utils/helpers';
import { Space } from './space.component';

test('Should render Space component', () => {
  const { asFragment } = customRender(<Space space='15px' />);

  expect(asFragment).toMatchSnapshot();
});
