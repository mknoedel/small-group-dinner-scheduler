import { ComponentType, FunctionComponent, SVGAttributes } from 'react';
import { APP_ICON_SIZE } from '../../config';
import { IconName, ICONS } from './config';

/**
 * Props of the AppIcon component, also can be used for SVG icons
 */
export interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: IconName;
  size?: string | number;
  title?: string;
}

/**
 * Renders SVG icon by given Icon name
 * @param {string} [color] - color of the icon as a CSS color value
 * @param {string} [icon] - name of the Icon to render
 * @param {string} [title] - title/hint to show when the cursor hovers the icon
 * @param {string | number} [size] - size of the icon, default is ICON_SIZE
 */
const AppIcon: FunctionComponent<Props> = ({
  color,
  icon = 'default',
  size = APP_ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (icon || 'default').trim().toLowerCase() as IconName;

  let ComponentToRender: ComponentType = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`AppIcon: icon "${iconName}" is not found!`);
    ComponentToRender = ICONS.default;
  }

  const propsToRender = {
    height: size,
    color,
    fill: color && 'currentColor',
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};

export default AppIcon;
