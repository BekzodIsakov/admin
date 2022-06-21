import styled from 'styled-components';

export const PaymentContainer = styled.div`
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
`

export const PaymentTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const PaymentCart = styled.div`
  padding: 26px 24px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 615px) {
    flex-direction: column;
  }
`;

export const PaymentNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentCourse = styled.div`
  margin-left: 16px;

  @media (max-width: 885px) {
    margin-right: 12px;
  }
`;

export const PaymentCourseTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 9px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const PaymentDate = styled.time`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.35);
`;

export const PaymentPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 615px) {
    align-items: flex-start;
    margin-top: 22px;
    margin-left: 65px;
  }
`;

export const PaymentPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: end;
  margin-bottom: 9px;

  @media (max-width: max-width: 615px) {
    font-size: 14px;
  }
`;

export const PaymentPaid = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #07cd86;
`;
