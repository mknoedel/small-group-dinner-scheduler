import { FunctionComponent, PropsWithChildren } from 'react';
import { IS_DEBUG } from '@/config';
import { LinkToPage } from '@/utils';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';

const TITLE_PRIVATE = 'Small Group Dinner Scheduler';

/**
 * SideBar navigation items with links for Private Layout
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    title: 'My Profile',
    path: '/me',
    icon: 'account',
  },
  {
    title: '404',
    path: '/wrong-url',
    icon: 'error',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

// Add debug links
IS_DEBUG &&
  SIDE_BAR_ITEMS.push({
    title: '[Debug Tools]',
    path: '/dev',
    icon: 'settings',
  });

/**
 * Renders "Private Layout" composition
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS} title={TITLE_PRIVATE} variant="sidebarPersistentOnDesktop">
      {children}
    </TopBarAndSideBarLayout>
  );
};

export default PrivateLayout;
