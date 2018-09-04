import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import TouchRipple from './TouchRipple';
import createRippleHandler from './createRippleHandler';
import { Animated } from '../styles/extended-styles';

const DefaultButton = Animated.createComponent(TouchableOpacity);

export const styles = {
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
  },
  active: {},
  disabled: {},
};

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
class ButtonBase extends React.Component {
  ripple = null;

  handlePressIn = createRippleHandler(this, 'PressIn', 'start', () =>
    this.setState({ active: true }),
  );
  handlePressOut = createRippleHandler(this, 'PressOut', 'stop', () =>
    this.setState({ active: false }),
  );

  state = {};

  onRippleRef = node => {
    this.ripple = node;
  };

  render() {
    const {
      centerRipple,
      children,
      classes,
      style: styleProp,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      onMouseUp,
      onPressIn,
      onPressOut,
      TouchRippleProps,
      ...other
    } = this.props;

    const style = [
      classes.root,
      disabled && classes.disabled,
      styleProp,
      this.state.active && classes.active,
    ];

    const buttonProps = {};

    let ComponentProp = component;

    if (ComponentProp === DefaultButton) {
      buttonProps.disabled = disabled;
    } else {
      buttonProps.role = 'button';
    }

    return (
      <ComponentProp
        disabled={disabled}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        style={style}
        {...buttonProps}
        {...other}
      >
        {typeof children === 'string' ? <Text>{children}</Text> : children}
        {!disableRipple && !disabled ? (
          <TouchRipple innerRef={this.onRippleRef} center={centerRipple} {...TouchRippleProps} />
        ) : null}
      </ComponentProp>
    );
  }
}

ButtonBase.propTypes = {
  ...TouchableOpacity.propTypes,
  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: PropTypes.bool,
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the base button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: PropTypes.bool,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,

  activeOpacity: PropTypes.number,
};

ButtonBase.defaultProps = {
  centerRipple: false,
  component: DefaultButton,
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  activeOpacity: 0.6,
};

export default withStyles(styles, { name: 'MuiButtonBase' })(ButtonBase);
