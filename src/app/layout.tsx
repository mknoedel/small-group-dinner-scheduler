import { FunctionComponent, PropsWithChildren } from 'react';
import { Metadata, Viewport } from 'next';
import { SimplePaletteColorOptions } from '@mui/material';
import { AppStoreProvider } from '@/store';
import defaultTheme, { ThemeProvider } from '@/theme';
import CurrentLayout from '@/layout';
import './globals.css';

const THEME_COLOR = (defaultTheme.palette?.primary as SimplePaletteColorOptions)?.main || '#FFFFFF';

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

// TODO: Build a loading handler.

export const metadata: Metadata = {
  title: 'Small Group Dinner Scheduler',
  description: 'A tool to help schedule small group dinners',
  manifest: '/site.webmanifest',
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>
          <ThemeProvider>
            <CurrentLayout>{children}</CurrentLayout>
          </ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
