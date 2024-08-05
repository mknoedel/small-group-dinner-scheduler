import { useCallback } from 'react';
import { useAppStore } from '../store';

export function useEventSwitchDarkMode() {
  const [state, dispatch] = useAppStore();

  return useCallback(() => {
    dispatch({
      type: 'DARK_MODE',
      payload: !state.darkMode,
    });
  }, [state, dispatch]);
}
