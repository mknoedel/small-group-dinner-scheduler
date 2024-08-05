'use client';
import { useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { Card, CardContent, CardHeader, Snackbar } from '@mui/material';
import { AppButton } from '@/components';
import { AppButtonProps } from '@/components/common/AppButton/AppButton';
import { MUIButtonColor } from '@/components/common/AppButton/colors';

/**
 * Same as AppButton but with onClick handler that copies JSX code to Clipboard
 */
const InternalAppButton = (props: AppButtonProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onClick = () => {
    const { color, endIcon, href, startIcon, size, title, to } = props;

    const propsToPass = [
      color && `color="${color}"`,
      endIcon && `endIcon="${endIcon}"`,
      href && `href="${href}"`,
      startIcon && `startIcon="${startIcon}"`,
      size && `size="${size}"`,
      title && `title="${title}"`,
      to && `to="${to}"`,
    ]
      .filter(Boolean)
      .join(' ');

    const code = `<AppButton ${propsToPass} />`;
    copyToClipboard(code);
    setSnackbarOpen(true); // Show snackbar
    setTimeout(() => setSnackbarOpen(false), 3000); // Hide snackbar after small delay
  };

  return (
    <>
      <AppButton {...props} onClick={onClick} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        ContentProps={{
          sx: { display: 'block', textAlign: 'center' },
        }}
        open={snackbarOpen}
        message="JSX code copied to Clipboard"
      />
    </>
  );
};

/**
 * Renders "Demo Section" for AppButton component
 * @component DemoAppButton
 */
const DemoAppButton = () => {
  return (
    <Card>
      <CardHeader
        title="AppButton"
        subheader="Pre-configured Button with lots of improvements, SVG icons specified by name, internal and external links, custom colors, etc. Click to copy the JSX code."
      />
      <CardContent sx={{ px: 1, py: 0 }}>
        <InternalAppButton color="primary">primary</InternalAppButton>
        <InternalAppButton color="secondary">secondary</InternalAppButton>
        <InternalAppButton color="success">success</InternalAppButton>
        <InternalAppButton color="error">error</InternalAppButton>
        <InternalAppButton color="info">info</InternalAppButton>
        <InternalAppButton color="warning">warning</InternalAppButton>
        <InternalAppButton color={'red' as MUIButtonColor} endIcon="close">
          Red
        </InternalAppButton>
        <InternalAppButton color={'green' as MUIButtonColor} startIcon="menu">
          Green
        </InternalAppButton>
        <InternalAppButton color={'blue' as MUIButtonColor} startIcon="menu" endIcon="close">
          Blue
        </InternalAppButton>
        <InternalAppButton color={'#f0f' as MUIButtonColor} to="/">
          #f0f
        </InternalAppButton>
        <InternalAppButton color={'rgba(255, 0, 255, 0.5)' as MUIButtonColor} to="/">
          rgba(255, 0, 255, 0.5)
        </InternalAppButton>
      </CardContent>
    </Card>
  );
};

export default DemoAppButton;
