import styled from 'styled-components';

export const NotificationContainer = styled.div`
  padding: 20px 24px;
  border-radius: 4px;
  background-color: #fff;
`;

export const NotificationTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;
export const NotificationList = styled.ul`
  margin-top: 24px;
  margin-bottom: 38px;
`;

export const NotificationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`;

export const NotificationIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 12px;
  background-color: #bdeff0;
  border-radius: 50%;
`;

export const NotificationMessageBox = styled.div`
  margin-left: 24px;
`;

export const NotificationMessage = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const NotificationDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.35);

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const NotificationReadBtn = styled.button`
  display: block;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-decoration: underline;
  margin: 0 auto;
  color: #ba8d5b;
  background-color: transparent;
  border: none;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
