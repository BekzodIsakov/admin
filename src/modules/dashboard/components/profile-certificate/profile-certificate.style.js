import styled from 'styled-components';

export const CertificateContainer = styled.section`
  width: 100%;
  padding: 24px 24px 32px;
  background-color: #ffffff;
  margin-top: 20px;
  display: ${props => props.isShow || 'block'};
`;

export const ProfileCertificateHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export const CertificateContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1275px) {
    flex-direction: column;
  }
`;
