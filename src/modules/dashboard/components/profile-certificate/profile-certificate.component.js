import { hoc } from '@utils/hoc';
import { Certificate } from './certificate/certificate.component';
import {
  CertificateContainer,
  CertificateContentWrapper,
  ProfileCertificateHeading
} from './profile-certificate.style';
import goldCertificateImg from '../../../../assets/img/gold-certificate.jpg';
// import platinumCertificateImg from '../../../../assets/img/platinum-certificate.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { dashboardActions } from '@dashboard/store/dashboard.slice';

const useProfileCertificateProps = () => {
  const dispatch = useDispatch();
  const certificates = useSelector(state => state.dashboard.certificates);

  const handleDownload = (courseId, e) => {
    e.preventDefault();
    dispatch(
      dashboardActions.downloadCertificate({
        courseId,
        success: res => {
          window.open(res.certificate_url, '_blank');
        }
      })
    );
  };

  useEffect(() => {
    dispatch(dashboardActions.fetchCertificates());
  }, [dispatch]);

  return {
    certificates,
    handleDownload
  };
};

export const ProfileCertificate = hoc(
  useProfileCertificateProps,
  ({ certificates, handleDownload }) => {
    if (!certificates?.length) return null;

    return (
      <CertificateContainer>
        <CertificateContentWrapper>
          {certificates && certificates.length > 0 && (
            <>
              <ProfileCertificateHeading>
                Sizning sertifikatlaringiz
              </ProfileCertificateHeading>
              {certificates.map(certificate => (
                <Certificate
                  certificateImage={goldCertificateImg}
                  certificateHeading={certificate.course}
                  certificateType={certificate.type}
                  onDownload={handleDownload.bind(null, certificate.course_id)}
                  id={certificate.id}
                  key={certificate.id}
                />
              ))}
            </>
          )}
        </CertificateContentWrapper>
      </CertificateContainer>
    );
  }
);
