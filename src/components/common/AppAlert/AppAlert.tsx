import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import { FunctionComponent } from 'react';
import { APP_ALERT_SEVERITY, APP_ALERT_VARIANT } from '../../config';

//TODO: Remove these
const AppAlert: FunctionComponent<MuiAlertProps> = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  onClose,
  ...restOfProps
}) => {
  return <MuiAlert severity={severity} sx={{ marginY: 1 }} variant={variant} onClose={onClose} {...restOfProps} />;
};

export default AppAlert;
