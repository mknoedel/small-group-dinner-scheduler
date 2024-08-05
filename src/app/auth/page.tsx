import { redirect } from 'next/navigation';

/**
 * Redirects to default Auth page
 */
const AuthPage = () => {
  redirect('/auth/login');
};

export default AuthPage;
