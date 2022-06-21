import React from 'react';
import { NavLink } from 'react-router-dom';

import { SvgIcon } from '@components/atoms';
import { StyledNavLinkContainer } from './sidebar-nav-link.style';

const SidebarNavLink = ({ to, iconName, $stroke, children, ...rest }) => {
  return (
    <StyledNavLinkContainer $stroke={$stroke}>
      <NavLink to={to} activeClassName='active-link'>
        <SvgIcon iconName={iconName} $stroke={$stroke} />
        {children}
      </NavLink>
    </StyledNavLinkContainer>
  );
};
export { SidebarNavLink };
