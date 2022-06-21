import React from 'react';
import { Header } from './header/header.component';
import { LeftSidebar } from './sidebar/left-sidebar';
import { StyledMainLayout } from './main-layout.styles';
import { RightSidebar } from './sidebar/right-sidebar/right-sidebar.component';

import { BottomNav } from './bottom-nav';

const MainLayout = ({ children, rightSidebar }) => {
  return (
    <StyledMainLayout>
      <LeftSidebar />
      <div className='wrapper'>
        <Header />
        <div className='inner-wrapper'>
          <div>{children}</div>
          {rightSidebar && <RightSidebar>{rightSidebar}</RightSidebar>}
        </div>
      </div>
      <BottomNav />
    </StyledMainLayout>
  );
};

export { MainLayout };
