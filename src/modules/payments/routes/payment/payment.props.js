import { useSelector } from 'react-redux';

export const usePaymentProps = () => {
  const { payments } = useSelector(state => state.payments);

  return {
    payments
  };
};
