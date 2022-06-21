import styled from 'styled-components';

export const CourseTabContainer = styled.div`
  background-color: #fff;
`;

export const CourseTabContent = styled.div`
  padding: 24px;
  background-color: #fff;
`;

export const CourseTabs = styled.div`
  background-color: #fff;
  padding: 24px 24px 0px;
  border-bottom: 1px solid #dadada;

  @media (max-width: 1024px) {
    white-space: nowrap;
    overflow-x: auto;
  }
`;

export const CourseTabItem = styled.button`
  position: relative;
  z-index: 1;
  padding: 0;
  margin-bottom: 15px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#006CD0' : 'rgba(0, 0, 0, 0.5)')};

  &:not(:last-child) {
    margin-right: 45px;
  }

  &::after {
    position: absolute;
    z-index: 2;
    top: 37px;
    left: 0;
    width: 100%;
    content: '';
    border-bottom: ${props => (props.active ? '2px solid #006CD0' : 'none')};
  }

  @media (max-width: 1024px) {
    &::after {
      top: 35px;
    }
  }
`;
