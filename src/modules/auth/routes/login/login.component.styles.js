import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 495px;
  padding: 50px 32px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 1024px) {
    position: relative;
  }

  @media (max-width: 545px) {
    width: 100%;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const FormGroupTop = styled.div`
  margin-bottom: 12px;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;

  @media (max-width: 632px) {
    font-size: 28px;
    line-height: 38px;
  }
`;
export const FormDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  color: #81755c;

  @media (max-width: 632px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
`;

export const FormLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.35);

  @media (max-width: 632px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const FormGroupBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #dadada;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;
export const FormConditionDesc = styled.p`
  width: 225px;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;

  @media (max-width: 490px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
export const FormConditionLink = styled.span`
  color: #2996fa;
`;
