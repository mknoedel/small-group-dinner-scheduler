import { Avatar, Stack, Typography } from '@mui/material';
import { AppLink } from '../common';
import { UserProfile } from '@auth0/nextjs-auth0/client';

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: UserProfile;
}

/**
 * Renders User info with Avatar
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const fullName = [user?.given_name || '', user?.family_name || ''].join(' ').trim();
  const avatar = user?.picture ? user?.picture : undefined;
  const email = user?.email && [user?.email, user?.email_verified ? '' : '(UNVERIFIED)'].join(' ').trim();

  return (
    <Stack alignItems="center" minHeight="fit-content" marginBottom={2} {...restOfProps}>
      {showAvatar ? (
        <AppLink to="/me" underline="none">
          <Avatar
            sx={{
              width: 64,
              height: 64,
              fontSize: '3rem',
            }}
            alt={fullName || 'User Avatar'}
            src={avatar}
          />
        </AppLink>
      ) : null}
      <Typography sx={{ mt: 1 }} variant="h6">
        {fullName || 'Current User'}
      </Typography>
      {email && <Typography variant="body2">{email}</Typography>}
    </Stack>
  );
};

export default UserInfo;
