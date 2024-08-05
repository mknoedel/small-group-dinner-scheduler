import { useCallback } from 'react';
import { sessionStorageGet, sessionStorageDelete } from '@/utils/sessionStorage';
import { useAppStore } from '../store';


// TODO: Make it so we can actually trust state.isAuthenticated and thus this hook unnecessary
export function useIsAuthenticated() {
  const [state] = useAppStore();
  let result = state.isAuthenticated;

  // TODO: AUTH: replace next line with access token verification
  result = Boolean(sessionStorageGet('access_token', ''));
  return result;
}

export function useEventLogout() {
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    // TODO: AUTH: replace next line with access token saving
    sessionStorageDelete('access_token');

    dispatch({ type: 'LOG_OUT' });
  }, [dispatch]);
}
