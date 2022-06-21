import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUser = styled.div`
  position: relative;
  cursor: pointer;

  h5 {
    color: #000;
  }

  @media only screen and (max-width: ${props => props.theme.devices.phone}) {
    h5,
    h6 {
      display: none;
    }
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  right: 0;
  bottom: -11rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 170px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.3);
  padding: 15px 20px;
`;

export const ProfileMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #000000;
  text-decoration: none;
`;
