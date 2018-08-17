/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -14,
    marginRight: 16, // used for row presentation of radio/checkbox

    '[disabled="true"]': {
      cursor: 'default',
    },
  },
  /* Styles applied to the root element if `labelPlacement="start"`. */
  labelPlacementStart: {
    flexDirection: 'row-reverse',
  },
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  disabledText: {
    color: theme.palette.text.disabled,
  },
  /* Styles applied to the label's Typography component. */
  label: {},
});

/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
function FormControlLabel(props, context) {
  const {
    checked,
    classes,
    style: styleProp,
    control,
    disabled: disabledProp,
    inputRef,
    label,
    labelPlacement,
    name,
    onValueChange,
    value,
    ...other
  } = props;
  const { muiFormControl } = context;

  let disabled = disabledProp;
  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }
  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  const controlProps = {
    disabled,
  };
  ['name', 'onValueChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });

  return (
    <View
      style={styleNames(
        classes.root,
        {
          [classes.labelPlacementStart]: labelPlacement === 'start',
          [classes.disabled]: disabled,
        },
        styleProp,
      )}
      {...other}
    >
      {React.cloneElement(control, controlProps)}
      <Typography style={styleNames(classes.label, { [classes.disabledText]: disabled })}>
        {label}
      </Typography>
    </View>
  );
}

FormControlLabel.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.element,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start']),
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {boolean} checked The `checked` value of the switch
   */
  onValueChange: PropTypes.func,
  /**
   * The value of the component.
   */
  value: PropTypes.bool,
};

FormControlLabel.defaultProps = {
  labelPlacement: 'end',
};

FormControlLabel.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiFormControlLabel' })(FormControlLabel);
