import styled from 'styled-components';

import ActiveBannerCardBackground from '../../assets/img/active-banner-bgi.png';

export const ActiveBannerCard = styled.div`
  padding: 24px 32px;
  background-image: url(${ActiveBannerCardBackground});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  overflow: hidden;
`;

export const ActiveBannerTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #000000;
  max-width: 208px;
  margin-bottom: 1.6rem;
`;

export const ActiveBannerSubtitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ff7a00;
  margin-bottom: 7px;
`;

export const ActiveBannerTime = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #ff7a00;
  margin-bottom: 2rem;
`;

export const ActiveBannerLink = styled.div`
  a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #000000;
    text-decoration: none;
    display: block;

    svg {
      margin-left: 16px;
      transition: all ease 0.3s;
    }

    &:hover {
      svg {
        margin-left: 22px;
      }
    }
  }
`;
