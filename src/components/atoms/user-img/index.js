import React from 'react';
import { StyledUserImg } from './styles';

const UserImg = ({ src, alt, size = 'middle' }) => {
  return (
    <StyledUserImg size={size}>
      <img src={src} alt={alt} />
    </StyledUserImg>
  );
};

export { UserImg };
