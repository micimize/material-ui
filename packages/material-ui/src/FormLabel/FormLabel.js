import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
    fontSize: 16,
    lineHeight: 1,
    padding: 0,
  },
  /* Styles applied to the root element if `focused={true}`. */
  focused: {
    color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light'],
  },
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {
    color: theme.palette.text.disabled,
  },
  /* Styles applied to the root element if `error={true}`. */
  error: {
    color: theme.palette.error.main,
  },
  asterisk: {},
  asteriskError: {
    color: theme.palette.error.main,
  },
});

function FormLabel(props, context) {
  const {
    children,
    classes,
    style: styleProp,
    component: Component,
    disabled: disabledProp,
    error: errorProp,
    focused: focusedProp,
    required: requiredProp,
    ...other
  } = props;

  const { muiFormControl } = context;

  let required = requiredProp;
  let focused = focusedProp;
  let disabled = disabledProp;
  let error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }
    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }
  console.log(focused);

  const className = styleNames(
    classes.root,
    {
      [classes.focused]: focused,
      [classes.disabled]: disabled,
      [classes.error]: error,
    },
    styleProp,
  );

  return (
    <Component style={className} {...other}>
      {children}
      {required && (
        <Text
          style={styleNames(classes.asterisk, {
            [classes.error]: error,
            [classes.asteriskError]: error,
          })}
          data-mui-test="FormLabelAsterisk"
        >
          {'\u2009*'}
        </Text>
      )}
    </Component>
  );
}

FormLabel.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
};

FormLabel.defaultProps = {
  component: Text,
};

FormLabel.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiFormLabel' })(FormLabel);
