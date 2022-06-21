import { customRender } from '@test-utils/helpers';
import { StyledUserImg } from './styles';

describe('Atoms Context', () => {
  test('Should render UserImg component', async () => {
    const { asFragment } = customRender(<StyledUserImg />);
    expect(asFragment()).toMatchSnapshot();
  });
});
