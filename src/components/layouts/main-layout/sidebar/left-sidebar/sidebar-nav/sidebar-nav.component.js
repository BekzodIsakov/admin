import React from 'react';
import { StyledNav } from './sidebar-nav.style';
import { SidebarNavLink } from '../sidebar-nav-link';

const SidebarNav = props => {
  return (
    <StyledNav>
      <ul>
        <SidebarNavLink to='/dashboard' iconName={'home-icon'}>
          {props.collapse ? 'Bosh sahifa' : ''}
        </SidebarNavLink>
      </ul>
    </StyledNav>
  );
};

export { SidebarNav };
