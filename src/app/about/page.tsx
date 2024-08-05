import { Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import { AppLink } from '@/components';

const AboutPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">
        Demo of reusable components is available on <AppLink to="/dev">DevTools page</AppLink>
      </Typography>
    </Stack>
  );
};

export default AboutPage;
