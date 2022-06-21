import { customRender } from '@test-utils/helpers';
import { screen } from '@testing-library/react';

import { ActiveBanner } from './active-banner.component';

const setup = ({ coursePromoTimer, deadlineDate, timeIndex }) => {
  return customRender(
    <ActiveBanner
      coursePromoTimer={coursePromoTimer}
      deadlineDate={deadlineDate}
      timeIndex={timeIndex}
    />
  );
};

test('Active banner test', () => {
  const { asFragment } = setup({
    coursePromoTimer: { title: 'tile', serial: 'serial' },
    deadlineDate: '15.25.54',
    timeIndex: '1'
  });
  expect(asFragment).toMatchSnapshot();
});

test('Active banner props test', () => {
  setup({
    coursePromoTimer: 'title',
    deadlineDate: '13.02.03',
    timeIndex: '1'
  });
  const activeBanenrDeadlineTime = screen.getByTestId('active-banner-subtitle');
  const activeBannerTitle = screen.getByTestId('active-banner-title');
  expect(activeBanenrDeadlineTime && activeBannerTitle).toBeTruthy();
});
