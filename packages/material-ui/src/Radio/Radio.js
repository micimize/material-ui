import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import SwitchBase from '../internal/SwitchBase';
import RadioButtonUncheckedIcon from '../internal/svg-icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '../internal/svg-icons/RadioButtonChecked';
import { capitalize } from '../utils/helpers';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  icon: {
    color: theme.palette.text.secondary,
    fill: theme.palette.text.secondary,
  },
  /* Styles applied to the root element if `checked={true}`. */
  checked: {},
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    color: theme.palette.action.disabled,
    fill: theme.palette.action.disabled,
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {},
  colorPrimaryChecked: {
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {},
  colorSecondaryChecked: {
    color: theme.palette.secondary.main,
    fill: theme.palette.secondary.main,
  },
});

function Radio(props) {
  const { classes, color, ...other } = props;

  return (
    <SwitchBase
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<RadioButtonCheckedIcon />}
      classes={{
        icon: styleNames(classes.icon, classes[`color${capitalize(color)}`]),
        checked: styleNames(classes[`color${capitalize(color)}Checked`], classes.checked),
        disabled: classes.disabled,
      }}
      {...other}
    />
  );
}

Radio.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'onPrimary', 'onSecondary', 'default']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Callback fired when the state is changed.
   *
   * @param {boolean} value The `value` value of the button
   */
  onValueChange: PropTypes.func,
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.bool,
};

Radio.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles, { name: 'MuiRadio' })(Radio);
