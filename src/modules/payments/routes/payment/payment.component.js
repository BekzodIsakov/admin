import { LastNews } from '@components/last-news/last-news.component';
import { MainLayout } from '@components/layouts/main-layout';
import { RecommendCourses } from '@components/recommend-courses';
import { EmptyPaymentsHistory } from '@courses/components/empty-payments-history/empty-payments-history.component';
import { ProfilePayments } from '@payments/components/payments-history';
import { hoc } from '@utils/hoc';
import { usePaymentProps } from './payment.props';

export const Payment = hoc(usePaymentProps, ({ payments }) => {
  return (
    <MainLayout rightSidebar={<LastNews />}>
      {payments.length ? <ProfilePayments /> : <EmptyPaymentsHistory />}
      <RecommendCourses />
    </MainLayout>
  );
});
