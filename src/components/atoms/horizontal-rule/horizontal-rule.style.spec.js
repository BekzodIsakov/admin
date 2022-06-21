const { customRender } = require('@test-utils/helpers');
const { HorizontalRule } = require('./horizontal-rule.style');

describe('Atoms Context', () => {
  test('Should render HorizontalRule component', async () => {
    const { asFragment } = customRender(<HorizontalRule />);
    expect(asFragment()).toMatchSnapshot();
  });
});
