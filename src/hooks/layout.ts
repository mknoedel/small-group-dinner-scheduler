'use client';
import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { IS_SERVER } from '@/utils';

export const MOBILE_SCREEN_MAX_WIDTH = 600; // Sync with https://mui.com/material-ui/customization/breakpoints/
export const SERVER_SIDE_MOBILE_FIRST = true; // true for SSR to start with the mobile view

/**
 * Hook to detect onMobile vs. onDesktop using Media Query
 */
function useIsMobileByMediaQuery() {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return onMobile;
}

/**
 * Hook to detect onMobile vs. onDesktop with Next.js workaround
 */
function useIsMobileForNextJs() {
  const onMobile = useIsMobileByMediaQuery();
  const [onMobileDelayed, setOnMobileDelayed] = useState(SERVER_SIDE_MOBILE_FIRST);

  useEffect(() => {
    setOnMobileDelayed(onMobile); // Next.js don't allow to use useOnMobileXxx() directly, so we need to use this workaround - this causes extra renders so want to remove
  }, [onMobile]);

  return onMobileDelayed;
}

/**
 * Hook to apply "onMobile" vs. "onDesktop" class to document.body depending on screen size.
 * Due to SSR/SSG we can not set 'app-layout onMobile' or 'app-layout onDesktop' on the server
 * If we modify className using JS, we will got Warning: Prop `className` did not match. Server: "app-layout" Client: "app-layout onDesktop"
 * So we have to apply document.body.class using the hook :)
 * Note: Use this hook one time only! In main App or Layout component
 */
function useMobileOrDesktopByChangingBodyClass() {
  const onMobile = useIsMobileByMediaQuery();

  useEffect(() => {
    if (onMobile) {
      document.body.classList.remove('onDesktop');
      document.body.classList.add('onMobile');
    } else {
      document.body.classList.remove('onMobile');
      document.body.classList.add('onDesktop');
    }
  }, [onMobile]);
}

/**
 * We need a "smart export wrappers", because we can not use hooks on the server side
 */
export const useIsMobile = IS_SERVER ? () => SERVER_SIDE_MOBILE_FIRST : useIsMobileForNextJs;
export const useBodyClassForMobileOrDesktop = IS_SERVER ? () => undefined : useMobileOrDesktopByChangingBodyClass;
