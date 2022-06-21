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
        <SidebarNavLink to='/courses' iconName={'react-icon'}>
          {props.collapse ? 'Kurslar' : ''}
        </SidebarNavLink>
        <SidebarNavLink to='/payments' iconName={'tab-icon'}>
          {props.collapse ? " To'lovlar" : ''}
        </SidebarNavLink>
      </ul>
    </StyledNav>
  );
};

export { SidebarNav };
