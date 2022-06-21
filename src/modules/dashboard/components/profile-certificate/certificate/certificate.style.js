import styled from 'styled-components';
import downloadIcon from '../../../../../assets/img/install-icon.svg';

export const CertificateWrapper = styled.div`
  width: calc(100% / 2 - 10px);
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 1275px) {
    width: 100%;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 970px) {
    width: 100%;
  }
`;

export const CertificateHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #000000;
`;

export const CertificateType = styled.strong`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.35);
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-item: flex-start;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #ba8d5b;

  &:before {
    width: 15px;
    height: 17px;
    margin-right: 15px;
    content: url(${downloadIcon});
  }
`;

export const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;
