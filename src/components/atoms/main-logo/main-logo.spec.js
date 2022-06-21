import { customRender } from '@test-utils/helpers';
import { StyledMainLogo } from './styles';

describe('Atoms Context', () => {
  test('Should render MainLogo component', async () => {
    const { asFragment } = customRender(<StyledMainLogo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
