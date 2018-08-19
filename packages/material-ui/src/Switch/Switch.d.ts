import * as React from 'react';
import { StandardProps } from '..';
import { SwitchBaseProps, SwitchBaseClassKey } from '../internal/SwitchBase';

export interface SwitchProps
  extends StandardProps<SwitchBaseProps, SwitchClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'onPrimary' | 'onSecondary' | 'default';
  icon?: React.ReactNode;
}

export type SwitchClassKey =
  | SwitchBaseClassKey
  | 'bar'
  | 'icon'
  | 'iconChecked'
  | 'switchBase'
  | 'colorOnPrimary'
  | 'colorOnSecondary'
  | 'colorPrimary'
  | 'colorSecondary';

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
