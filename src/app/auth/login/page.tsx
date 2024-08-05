import { Metadata, NextPage } from 'next';
import LoginForm from './LoginForm';

/**
 * User Login page
 * @page Login
 */
const LoginPage: NextPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to the Small Group Dinner Scheduler',
};

export default LoginPage;
