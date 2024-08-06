import { Metadata, NextPage } from 'next';
import { Stack, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Small Group Dinner Scheduler',
  description: 'A tool to help schedule small group dinners.',
};

/**
 * Main page of the Application
 */
const Home: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Stack alignItems="center" spacing={1}>
        <Typography>Home</Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
