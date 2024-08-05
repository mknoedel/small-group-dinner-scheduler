export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = typeof window !== 'undefined' && typeof window?.document !== 'undefined';

/**
 * Verifies existence of environment variables, raises an error if it is required and not set.
 */
export function envRequired(passProcessDotEnvDotValueNameHere: string | undefined): string {
  if (typeof passProcessDotEnvDotValueNameHere === 'undefined') {
    throw new Error('Missing .env variable!');
  }
  return passProcessDotEnvDotValueNameHere;
}

export function getCurrentEnvironment(): string {
  return process.env.NEXT_PUBLIC_ENV ?? process.env.NODE_ENV ?? 'development';
}
