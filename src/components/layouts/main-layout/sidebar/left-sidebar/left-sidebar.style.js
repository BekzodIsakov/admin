import styled from 'styled-components';

export const StyledLeftSidebar = styled.div`
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.white};
  transition: width 0.1s linear;
  display: inline-block;
  width: ${props => (props.collapse ? '30' : '10')}rem;
  height: 100vh;
  z-index: 3;

  & .logo {
    gap: 1rem;
    display: flex;
    position: relative;
    width: 30rem;
    justify-content: space-around;
    & p {
      width: ${props => (props.collapse ? '100' : '0')}%;
      overflow: hidden;
      height: 30px;
      color: #021122;
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 2rem;
    }
    & .active-burger {
      display: ${props => (props.collapse ? 'flex' : 'none')};
      cursor: pointer;
      padding: 1rem;
      margin-right: 10px;
      background: #f1f0ee;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      img {
        height: 2rem;
        width: 2rem;
      }
    }
    & .btn-img {
      padding: 1rem;
      position: absolute;
      right: -4rem;
      cursor: pointer;
      display: ${props => (props.collapse ? 'none' : 'block')};
    }
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;

    width: 100%;
    height: 10rem;
    margin-bottom: 3rem;
    background: #fbfcfd;
  }

  & .button-wrapper {
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 2.7rem;
    width: 100%;
    height: 7.2rem;
    margin-bottom: 3rem;

    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  @media only screen and (max-width: ${props => props.theme.devices.phone}) {
    display: none;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  left: 30rem;
  top: 0;
  width: calc(100% - 30rem);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const ModalTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 24px;
`;

export const ModalButton = styled.button`
  padding: 12px 25px;
  border: 1px solid ${props => (props.danger ? 'transparent' : '#3D444F')};
  border-radius: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  background-color: ${props => (props.danger ? '#FF5454' : '#fff')};
  cursor: pointer;
  color: ${props => (props.danger ? '#fff' : '#0D1523')};
  outline: none;
  margin-left: ${props => (props.danger ? '20px' : '0')};
`;
