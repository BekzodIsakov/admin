import React from 'react';
import { StyledMainLogo } from './styles';
import mainLogo from '../../../assets/img/main-logo.png';
import { Link } from 'react-router-dom';

const MainLogo = () => {
  return (
    <StyledMainLogo>
      <Link to='/dashboard'>
        <img src={mainLogo} alt="Najot ta'lim logo" />
      </Link>
    </StyledMainLogo>
  );
};

export { MainLogo };
