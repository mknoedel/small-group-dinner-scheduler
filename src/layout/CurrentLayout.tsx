'use client';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

/**
 * Returns the current Layout component depending on different circumstances.
 */
const CurrentLayout: FunctionComponent<PropsWithChildren> = (props) => {
  const { user, error, isLoading } = useUser();
  return user ? <PrivateLayout {...props} /> : <PublicLayout {...props} />;
};
export default CurrentLayout;
