import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { IS_DEBUG } from '@/config';
import { LinkToPage } from '@/utils';
import { useIsMobile } from '@/hooks';
import { BottomBar } from './components';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';
import { BOTTOM_BAR_DESKTOP_VISIBLE } from './config';

const TITLE_PUBLIC = 'Unauthenticated';

/**
 * SideBar navigation items with links for Public Layout
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
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
 * BottomBar navigation items with links for Public Layout
 */
const BOTTOM_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

/**
 * Renders "Public Layout" composition
 */
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const onMobile = useIsMobile();
  const bottomBarVisible = onMobile || BOTTOM_BAR_DESKTOP_VISIBLE;

  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS} title={TITLE_PUBLIC} variant="sidebarAlwaysTemporary">
      {children}
      <Stack component="footer">{bottomBarVisible && <BottomBar items={BOTTOM_BAR_ITEMS} />}</Stack>
    </TopBarAndSideBarLayout>
  );
};

export default PublicLayout;
