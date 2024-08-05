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
  title: 'Login - Small Group Dinner Scheduler',
  description: 'A tool to help schedule small group dinners',
};

export default LoginPage;
