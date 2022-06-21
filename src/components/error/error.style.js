import styled from 'styled-components';

export const ErrorPageWrapper = styled.div`
  padding: 202px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  height: 80vh;

  @media only screen and (max-width: 1700px) {
    height: 75vh;
  }
`;

export const ErrorPageImg = styled.img`
  width: 130px;
  height: 151px;
  object-fit: cover;
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    width: 100px;
    height: 116px;
  }
`;

export const ErrorPageTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 48px;
  max-width: 334px;

  @media only screen and (max-width: 1024px) {
    max-width: 314px;
    font-size: 18px;
  }
`;

export const ErrorPageBtn = styled.button`
  border: none;
  background: #ba8d5b;
  border-radius: 100px;
  padding: 12px 17px 12px 28px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  align-items: center;

  svg {
    fill: #fff;
    margin-left: 12px;
    stroke: #fff;
  }
`;
