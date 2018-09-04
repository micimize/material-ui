// @inheritedComponent IconButton

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import IconButton from '../IconButton';

export const styles = {
  root: {
    // // display: 'inline-flex',
    alignItems: 'center',
    // transition: 'none',
    '&:hover': {
      // Disable the hover effect for the IconButton.
      backgroundColor: 'transparent',
    },
  },
  icon: {
    zIndex: 1,
  },
  checked: {},
  disabled: {},
};

/**
 * @ignore - internal component.
 */
class SwitchBase extends React.Component {
  constructor(props) {
    super(props);

    this.isControlled = props.value !== null;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
    }
  }

  state = {};

  handleFocus = event => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    const { muiFormControl } = this.context;
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    const { muiFormControl } = this.context;
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  changeHandler = value => () => {
    if (this.props.onValueChange) {
      this.props.onValueChange(!value);
    }
    if (!this.isControlled) {
      this.setState({ checked: !value });
    }
  };

  render() {
    const {
      autoFocus,
      value,
      classes,
      style: styleProp,
      disabled: disabledProp,
      renderIcon,
      checkedIcon,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onValueChange,
      onFocus,
      readOnly,
      required,
      tabIndex,
      ...other
    } = this.props;

    const { muiFormControl } = this.context;
    let disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    const checked = this.isControlled ? value : this.state.checked;

    const style = [
      classes.icon,
      checked && classes.checked,
      disabled && classes.disabled,
      styleProp,
    ];

    return (
      <IconButton
        style={classes.root}
        disabled={disabled}
        tabIndex={null}
        role={undefined}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onPress={this.changeHandler(checked)}
        {...other}
      >
        {renderIcon
          ? renderIcon({ checked, style })
          : checked
            ? React.cloneElement(checkedIcon, { style: [checkedIcon.props.style, style] })
            : React.cloneElement(icon, { style: [icon.props.style, style] })}
      </IconButton>
    );
  }
}

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
SwitchBase.propTypes = {
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, the component is checked.
   */
  value: PropTypes.bool,
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
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
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
   * If `true`, the component appears indeterminate.
   */
  indeterminate: PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: PropTypes.node,
  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {boolean} checked The `checked` value of the switch
   */
  onValueChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the input will be required.
   */
  required: PropTypes.bool,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Alternative to icon + checked icon. will be passed ({ style, checked })
   */
  renderIcon: PropTypes.func,
};

SwitchBase.defaultProps = {
  value: null,
};

SwitchBase.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiSwitchBase' })(SwitchBase);
