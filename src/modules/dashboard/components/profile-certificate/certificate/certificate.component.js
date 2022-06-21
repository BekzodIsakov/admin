import {
  CertificateContent,
  CertificateHeading,
  CertificateType,
  CertificateWrapper,
  DownloadLink
} from './certificate.style';

export const Certificate = ({
  certificateImage,
  certificateHeading,
  certificateType,
  onDownload
}) => {
  return (
    <CertificateWrapper>
      <img src={certificateImage} alt='img' width='126' height='92' />
      <CertificateContent>
        <CertificateHeading>{certificateHeading}</CertificateHeading>
        <CertificateType>{certificateType}</CertificateType>
        <DownloadLink onClick={onDownload} href='#'>Yuklab olish</DownloadLink>
      </CertificateContent>
    </CertificateWrapper>
  );
};
