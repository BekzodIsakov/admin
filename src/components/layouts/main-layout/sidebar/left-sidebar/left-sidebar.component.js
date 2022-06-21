import { MainLogo } from '@components/atoms';
import { SidebarNav } from './sidebar-nav';
import { StyledLeftSidebar, SidebarOverlay } from './left-sidebar.style';
import { hoc } from '@utils/hoc';
import burger from '@assets/img/Vector.png';
import { useLeftSidebarProps } from './left-sidebar.props';
import activeBurger from '@assets/img/Vector2.png';

const LeftSidebar = hoc(useLeftSidebarProps, ({ collapse, toggleCollapse }) => {
  return (
    <>
      <StyledLeftSidebar collapse={collapse}>
        <div className='logo'>
          <MainLogo />
          <p>NAJOT TA'LIM</p>
          <div className='active-burger'>
            <img src={activeBurger} alt='' onClick={toggleCollapse} />
          </div>
          <div className='btn-img'>
            <img src={burger} onClick={toggleCollapse} alt='' />
          </div>
        </div>
        <SidebarNav collapse={collapse} />
      </StyledLeftSidebar>
      {collapse && <SidebarOverlay onClick={toggleCollapse} />}
    </>
  );
});

export { LeftSidebar };
