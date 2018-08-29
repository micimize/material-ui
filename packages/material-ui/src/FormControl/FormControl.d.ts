import * as React from 'react';
import { ViewProperties, EventEmitterListener as EventHandler } from 'react-native';
import { StandardProps, PropTypes } from '..';

export interface FormControlProps extends StandardProps<ViewProperties, FormControlClassKey> {
  component?: React.ReactType<FormControlProps>;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: PropTypes.Margin;
  onBlur?: EventHandler<any>;
  onFocus?: EventHandler<any>;
  required?: boolean;
}

export type FormControlClassKey = 'root' | 'marginNormal' | 'marginDense' | 'fullWidth';

declare const FormControl: React.ComponentType<FormControlProps>;

export default FormControl;
