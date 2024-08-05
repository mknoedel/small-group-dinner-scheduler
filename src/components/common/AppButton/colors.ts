export const MUI_BUTTON_COLORS = [
  'inherit',
  'default',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
] as const;

export type MUIButtonColor = (typeof MUI_BUTTON_COLORS)[number];
