'use client'
import { NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { DinnerResponse } from '@/utils';
import { dinner1 } from '@/data/testData';
import { AppImage } from '@/components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

/**
 * Main page of the Application
 */
const DinnerPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // TODO: Fetch whole dinner
  const dinner: DinnerResponse = dinner1
  
  return (
    <Stack spacing={2} padding={2}>
      <Stack alignItems="center" spacing={1}>
        {dinner.imageUrl && <AppImage width={500} height={500} title={`${id}-party`} src={dinner.imageUrl} />}
        <Typography>{id}</Typography>
        <Typography>{dinner.name}</Typography>
        <Typography>{dinner.date}</Typography>
        <Typography>{dinner.description}</Typography>
        <Typography>{dinner.groupId}</Typography>
        <Typography>{dinner.capacity}</Typography>
        <Typography>{dinner.signUpMethod}</Typography>
        <Typography>Hosts</Typography>
        {dinner?.hosts?.map((host) => (
          <>
            {JSON.stringify(host)}
          </>
        ))}
        <Typography>Waitlist</Typography>
        {dinner?.waitList?.map((waitlist) => (
          <>
            {JSON.stringify(waitlist)}
          </>
        ))}
      </Stack>
    </Stack>
  );
};

export default withPageAuthRequired(DinnerPage);

