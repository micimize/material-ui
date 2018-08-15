import React from 'react';
import { Text, TouchableOpacity , View} from 'react-native';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import keycode from 'keycode';
import ownerWindow from '../utils/ownerWindow';
import withStyles from '../styles/withStyles';
import { listenForFocusKeys, detectFocusVisible } from './focusVisible';
import TouchRipple from './TouchRipple';
import createRippleHandler from './createRippleHandler';
import { Animated } from '../styles/extended-styles';
// import Ripple from 'react-native-material-ripple';

/// TODO Remove and move into react-native-material-ripple fork
/// START

// import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { Animated as Animated2, Easing, TouchableWithoutFeedback } from 'react-native'

const DefaultButton = Animated.createComponent(TouchableOpacity);

import { StyleSheet } from 'react-native';

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

const radius = 10;
const styles2 = StyleSheet.create({
  container: _extends({}, StyleSheet.absoluteFillObject, {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
  }),

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});


function _objectWithoutProperties(obj, keys) {
	var target = {}
	for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
		target[i] = obj[i]
	}
	return target
}

class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,

    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.30,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,

    onRippleAnimation: (animation, callback) => animation.start(callback),
  };

  static propTypes = {
    ...Animated2.View.propTypes,
    ...TouchableWithoutFeedback.propTypes,

    rippleColor: PropTypes.string,
    rippleOpacity: PropTypes.number,
    rippleDuration: PropTypes.number,
    rippleSize: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
    rippleCentered: PropTypes.bool,
    rippleSequential: PropTypes.bool,
    rippleFades: PropTypes.bool,
    disabled: PropTypes.bool,

    onRippleAnimation: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onLayout = this.onLayout.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);

    this.renderRipple = this.renderRipple.bind(this);

    this.unique = 0;
    this.mounted = false;

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLayout(event) {
    let { width, height } = event.nativeEvent.layout;
    let { onLayout } = this.props;

    if ('function' === typeof onLayout) {
      onLayout(event);
    }

    this.setState({ width, height });
  }

  onPress(event) {
    let { ripples } = this.state;
    let { onPress, rippleSequential } = this.props;

    if (!rippleSequential || !ripples.length) {
      if ('function' === typeof onPress) {
        requestAnimationFrame(() => onPress(event));
      }

      this.startRipple(event);
    }
  }

  onLongPress(event) {
    let { onLongPress } = this.props;

    if ('function' === typeof onLongPress) {
      requestAnimationFrame(() => onLongPress(event));
    }

    this.startRipple(event);
  }

  onPressIn(event) {
    let { onPressIn } = this.props;

    if ('function' === typeof onPressIn) {
      onPressIn(event);
    }
  }

  onPressOut(event) {
    let { onPressOut } = this.props;

    if ('function' === typeof onPressOut) {
      onPressOut(event);
    }
  }

  onAnimationEnd() {
    if (this.mounted) {
      this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
    }
  }

  startRipple(event) {
    let { width, height } = this.state;
    let {
      rippleDuration,
      rippleCentered,
      rippleSize,
      onRippleAnimation,
    } = this.props;

    let w2 = 0.5 * width;
    let h2 = 0.5 * height;

    let { locationX, locationY } = rippleCentered?
      { locationX: w2, locationY: h2 }:
      event.nativeEvent;

    let offsetX = Math.abs(w2 - locationX);
    let offsetY = Math.abs(h2 - locationY);

    let R = rippleSize > 0?
      0.5 * rippleSize:
      Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

    let ripple = {
      unique: this.unique++,
      progress: new Animated2.Value(0),
      locationX,
      locationY,
      R,
    };

    let animation = Animated2
      .timing(ripple.progress, {
        toValue: 1,
        easing: Easing.out(Easing.ease),
        duration: rippleDuration,
        useNativeDriver: true,
      });

    onRippleAnimation(animation, this.onAnimationEnd);

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
  }

  renderRipple({ unique, progress, locationX, locationY, R }) {
    let { rippleColor, rippleOpacity, rippleFades } = this.props;

    let rippleStyle = {
      top: locationY - radius,
      left: locationX - radius,
      backgroundColor: rippleColor,

      transform: [{
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5 / radius, R / radius],
        }),
      }],

      opacity: rippleFades?
        progress.interpolate({
          inputRange: [0, 1],
          outputRange: [rippleOpacity, 0],
        }):
        rippleOpacity,
    };

    return (
      <Animated2.View style={[styles2.ripple, rippleStyle]} key={unique} />
    );
  }

  render() {
    let { ripples } = this.state;
    let { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
    let {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      rippleContainerBorderRadius,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      onLayout: __ignored__,
      ...props
    } = this.props;

    let touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      onPress,
      onPressIn,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,
      onPressOut,
      onLongPress: props.onLongPress? onLongPress : undefined,
      onLayout,
    };

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    };

    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated2.View {...props} style={[styles2.container]} pointerEvents='box-only'>
          {children}
          <View style={[styles2.container, containerStyle]}>
            {ripples.map(this.renderRipple)}
          </View>
        </Animated2.View>
      </TouchableWithoutFeedback>
    );
  }
}

/// END


export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight

    backgroundColor: 'transparent', // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    borderWidth: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    textAlignVertical: 'middle',
    // '-moz-appearance': 'none', // Reset

    // textDecorationLine: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    /*
    '&::-moz-focus-inner': {
      borderStyle: 'none', // Remove Firefox dotted outline.
    },
    */
    '[disabled="true"]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'default',
    },
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

  keyDown = false; // Used to help track keyboard activation keyDown

  button = null;

  focusVisibleTimeout = null;

  focusVisibleCheckTime = 50;

  focusVisibleMaxCheckTimes = 5;

  handleMouseDown = createRippleHandler(this, 'MouseDown', 'start', () => {
    clearTimeout(this.focusVisibleTimeout);
    if (this.state.focusVisible) {
      this.setState({ focusVisible: false });
    }
  });

  handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop');

  handleMouseLeave = createRippleHandler(this, 'MouseLeave', 'stop', event => {
    if (this.state.focusVisible) {
      event.preventDefault();
    }
  });

  handleTouchStart = createRippleHandler(this, 'TouchStart', 'start');

  handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop');

  handleTouchMove = createRippleHandler(this, 'TouchMove', 'stop');

  handleBlur = createRippleHandler(this, 'Blur', 'stop', () => {
    clearTimeout(this.focusVisibleTimeout);
    if (this.state.focusVisible) {
      this.setState({ focusVisible: false });
    }
  });

  state = {};

  componentDidMount() {
    this.button = ReactDOM.findDOMNode(this);
    listenForFocusKeys(ownerWindow(this.button));

    if (this.props.action) {
      this.props.action({
        focusVisible: () => {
          this.setState({ focusVisible: true });
          this.button.focus();
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

  /*
  handleKeyDown = event => {
    const { component, focusRipple, onKeyDown, onClick } = this.props;
    const key = keycode(event);

    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !this.keyDown && this.state.focusVisible && this.ripple && key === 'space') {
      this.keyDown = true;
      event.persist();
      this.ripple.stop(event, () => {
        this.ripple.start(event);
      });
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      event.target === event.currentTarget &&
      component &&
      component !== ReactNativeButton &&
      (key === 'space' || key === 'enter') &&
      !(this.button.tagName === 'A' && this.button.href)
    ) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  };

  handleKeyUp = event => {
    if (
      this.props.focusRipple &&
      keycode(event) === 'space' &&
      this.ripple &&
      this.state.focusVisible
    ) {
      this.keyDown = false;
      event.persist();
      this.ripple.stop(event, () => {
        this.ripple.pulsate(event);
      });
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  };
  */

  handleFocus = event => {
    if (this.props.disabled) {
      return;
    }

    // Fix for https://github.com/facebook/react/issues/7769
    if (!this.button) {
      this.button = event.currentTarget;
    }

    event.persist();
    detectFocusVisible(this, this.button, () => {
      this.onFocusVisibleHandler(event);
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

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
      onBlur,
      onFocus,
      onFocusVisible,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex,
      TouchRippleProps,
      type,
      ...other
    } = this.props;

    const className = styleNames(
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
      //<Ripple disabled={disableRipple || disabled}>
        <ComponentProp
          disabled={disabled}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onMouseDown={this.handleMouseDown}
          onMouseLeave={this.handleMouseLeave}
          onMouseUp={this.handleMouseUp}
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
          onPressIn={() => this.setState({ active: true })}
          onPressOut={() => this.setState({ active: false })}
          tabIndex={disabled ? '-1' : tabIndex}
          style={className}
          ref={buttonRef}
          {...buttonProps}
          {...other}
        >
          {typeof children === 'string' ? <Text>{children}</Text> : children}
          <Ripple disabled={disableRipple || disabled}></Ripple>
        </ComponentProp>
      // </Ripple>
    );

    // return (
    //   <ComponentProp
    // disabled={disabled}
    // onBlur={this.handleBlur}
    // onFocus={this.handleFocus}
    // onMouseDown={this.handleMouseDown}
    // onMouseLeave={this.handleMouseLeave}
    // onMouseUp={this.handleMouseUp}
    // onTouchEnd={this.handleTouchEnd}
    // onTouchMove={this.handleTouchMove}
    // onTouchStart={this.handleTouchStart}
    // onPressIn={() => this.setState({ active: true })}
    // onPressOut={() => this.setState({ active: false })}
    // tabIndex={disabled ? '-1' : tabIndex}
    // style={className}
    // ref={buttonRef}
    // {...buttonProps}
    // {...other}
    //   >
    //     {typeof children === 'string' ? <Text>{children}</Text> : children}
    //     {!disableRipple && !disabled ? (
    //       // <TouchRipple innerRef={this.onRippleRef} center={centerRipple} {...TouchRippleProps} />
    //       <TouchRipple innerRef={this.onRippleRef} center={centerRipple} {...TouchRippleProps} />
    //     ) : null}
    //   </ComponentProp>
    // );
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
   * @ignore
   */
  className: PropTypes.string,
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
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  tabIndex: '0',
  type: 'button',
  activeOpacity: 0.6,
};

export default withStyles(styles, { name: 'MuiButtonBase' })(ButtonBase);
