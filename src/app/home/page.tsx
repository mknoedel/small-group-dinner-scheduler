import { Metadata, NextPage } from 'next';
import { Stack } from '@mui/material';
import DemoAppAlert from '../dev/components/DemoAppAlerts';
import DemoAppButton from '../dev/components/DemoAppButton';
import DemoAppIcon from '../dev/components/DemoAppIcon';
import DemoAppIconButton from '../dev/components/DemoAppIconButton';
import DemoAppImage from '../dev/components/DemoAppImage';

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
        <DemoAppAlert />
        <DemoAppButton />
        <DemoAppIcon />
        <DemoAppIconButton />
        <DemoAppImage />
      </Stack>
    </Stack>
  );
};

export default Home;
