/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import { StyledHeader } from './heading.style';

export const Heading = ({ variant, children, color }) => {
  const HeadingComponent = StyledHeader[variant] || StyledHeader.h1;
  return (
    <HeadingComponent
      aria-level={variant?.slice(-1) || '1'}
      role='heading'
      color={color}
    >
      {children}
    </HeadingComponent>
  );
};
