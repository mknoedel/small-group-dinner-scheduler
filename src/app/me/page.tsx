'use client';
import { Stack } from '@mui/material';
import { NextPage } from 'next';
import { AppAlert, UserInfo } from '../../components';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

/**
 * Renders User Profile Page
 */
const ProfilePage: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Stack spacing={2} padding={2}>
      <AppAlert severity="warning">This page is under construction</AppAlert>
      <UserInfo user={user} showAvatar />
    </Stack>
  );
};

export default withPageAuthRequired(ProfilePage);
