import { useProfilePaymentProps } from './payments-history.props';
import {
  PaymentCart,
  PaymentContainer,
  PaymentContent,
  PaymentCourse,
  PaymentCourseTitle,
  PaymentDate,
  PaymentNameWrapper,
  PaymentPaid,
  PaymentPrice,
  PaymentPriceWrapper,
  PaymentTitle
} from './payments-history.styles';
import { hoc } from '@utils/hoc';

export const ProfilePayments = hoc(useProfilePaymentProps, ({ payments }) => {
  if (!payments) {
    return null;
  }
  return (
    <PaymentContainer>
      <PaymentTitle>Sizning to’lovlaringiz</PaymentTitle>
      {payments?.map(payment => (
        <PaymentCart key={payment.id}>
          <PaymentContent>
            <PaymentNameWrapper>
              <img
                src={payment[`course-picture`].url}
                alt='Profile payment course img'
                width={48}
                height={48}
                style={{ borderRadius: '50%' }}
              />
              <PaymentCourse>
                <PaymentCourseTitle>
                  {payment[`course-info`].uz}
                </PaymentCourseTitle>
                <PaymentDate>{payment?.day}</PaymentDate>
              </PaymentCourse>
            </PaymentNameWrapper>
            <PaymentPriceWrapper>
              <PaymentPrice>{payment.amount} so’m</PaymentPrice>
              <PaymentPaid>To'langan</PaymentPaid>
            </PaymentPriceWrapper>
          </PaymentContent>
        </PaymentCart>
      ))}
    </PaymentContainer>
  );
});
