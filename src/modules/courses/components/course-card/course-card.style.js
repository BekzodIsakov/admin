import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  background: #f9f9f9;
  border-radius: 4px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  & > a {
    display: block;
    padding: 24px;
    padding-top: 16px;
    text-decoration: none;
    color: ${props => props.theme.colors.black};

    @media (max-width: 350px) {
      padding: 15px;
    }
  }
`;

export const InfoTrigger = styled.span`
  position: relative;
  width: 20px;
  height: 25px;
  display: block;
  margin-left: auto;
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  top: calc(100% - 3px);
  left: 10px;
  z-index: 10;
  width: 285px;
  display: none;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: left;
`;

export const InfoBoxTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const InfoBoxHeading = styled.p`
  margin-left: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.brown75};
`;

export const InfoBoxText = styled.p`
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export const CourseTitle = styled.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
`;

export const TeacherInfoWrapper = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const TeacherAvatar = styled.img`
  border-radius: 24px;
`;

export const TeacherName = styled.p`
  width: 80%;
  padding-left: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 350px) {
    width: 65%;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomInfoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.brown75};
`;
