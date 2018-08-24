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
  /* Styles applied to the root element. */
  root: {
    // display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Remove grey highlight

    backgroundColor: 'transparent', // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    borderWidth: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
  },
  active: {},
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the root element if keyboard focused. */
  focusVisible: {},
};

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production' && !React.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
class ButtonBase extends React.Component {
  ripple = null;

  button = null;

  focusVisibleTimeout = null;

  focusVisibleCheckTime = 50;

  focusVisibleMaxCheckTimes = 5;

  handlePressIn = createRippleHandler(this, 'PressIn', 'start', () => this.setState({ active: true }));
  handlePressOut = createRippleHandler(this, 'PressOut', 'stop', () => this.setState({ active: false }));

  state = {};

  componentDidMount() {
    /*
    this.button = ReactDOM.findDOMNode(this);
    listenForFocusKeys(ownerWindow(this.button));
    */

    if (this.props.action) {
      this.props.action({
        focusVisible: () => {
          this.setState({ focusVisible: true });
          // this.button.focus();
        },
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.focusRipple &&
      !this.props.disableRipple &&
      !prevState.focusVisible &&
      this.state.focusVisible
    ) {
      this.ripple.pulsate();
    }
  }

  componentWillUnmount() {
    this.button = null;
    clearTimeout(this.focusVisibleTimeout);
  }

  onRippleRef = node => {
    this.ripple = node;
  };

  onFocusVisibleHandler = event => {
    this.keyDown = false;
    this.setState({ focusVisible: true });

    if (this.props.onFocusVisible) {
      this.props.onFocusVisible(event);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof prevState.focusVisible === 'undefined') {
      return {
        focusVisible: false,
        lastDisabled: nextProps.disabled,
      };
    }

    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
      return {
        focusVisible: false,
        lastDisabled: nextProps.disabled,
      };
    }

    return {
      lastDisabled: nextProps.disabled,
    };
  }

  render() {
    const {
      action,
      buttonRef,
      centerRipple,
      children,
      classes,
      style: styleProp,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      onFocusVisible,
      onMouseUp,
      onPressIn,
      onPressOut,
      TouchRippleProps,
      type,
      ...other
    } = this.props;

    const style = styleNames(
      classes.root,
      {
        [classes.disabled]: disabled,
        [classes.focusVisible]: this.state.focusVisible,
      },
      styleProp,
      { [classes.active]: this.state.active },
    );

    const buttonProps = {};

    let ComponentProp = component;

    /*
    if (ComponentProp === ReactNativeButton && other.href) {
      ComponentProp = Text;
    }
    */

    if (ComponentProp === DefaultButton) {
      buttonProps.type = type || 'button';
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
        ref={buttonRef}
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
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `focusVisible()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,
  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus through a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
  focusVisibleClassName: PropTypes.string,
  TODO idk how we can achieve this in react-native
   */
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
  type: PropTypes.string,

  activeOpacity: PropTypes.number,
};

ButtonBase.defaultProps = {
  centerRipple: false,
  component: DefaultButton,
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  type: 'button',
  activeOpacity: 0.6,
};

export default withStyles(styles, { name: 'MuiButtonBase' })(ButtonBase);
