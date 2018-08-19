import * as React from 'react';
import { StandardProps } from '..';
import { SwitchBaseProps, SwitchBaseClassKey } from '../internal/SwitchBase';

export interface RadioProps
  extends StandardProps<SwitchBaseProps, RadioClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default' | 'onPrimary' | 'onSecondary';
  icon?: React.ReactNode;
}

export type RadioClassKey = SwitchBaseClassKey | 'colorPrimary' | 'colorSecondary' | 'colorOnPrimary' | 'colorOnSecondary';

declare const Radio: React.ComponentType<RadioProps>;

export default Radio;
