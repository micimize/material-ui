import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import Ripple from './Ripple';

import { Animated, Easing, TouchableWithoutFeedback } from 'react-native';

const DURATION = 550;
export const DELAY_RIPPLE = 80;

const radius = 10;

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },

  container: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
  /* Styles applied to the internal `Ripple` components `ripple` class. */
  // ripple: {
  //   width: 50,
  //   height: 50,
  //   left: 0,
  //   top: 0,
  //   opacity: 0,
  //   position: 'absolute',
  // },
  /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
  // rippleVisible: {
  //   opacity: 0.3,
  //   transform: 'scale(1)',
  //   animation: `mui-ripple-enter ${DURATION}ms ${theme.transitions.easing.easeInOut}`,
  // },
  // /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
  // ripplePulsate: {
  //   animationDuration: `${theme.transitions.duration.shorter}ms`,
  // },
  // /* Styles applied to the internal `Ripple` components `child` class. */
  // child: {
  //   opacity: 1,
  //   display: 'block',
  //   width: '100%',
  //   height: '100%',
  //   borderRadius: '50%',
  //   // backgroundColor: 'currentColor',
  // },
  // /* Styles applied to the internal `Ripple` components `childLeaving` class. */
  // childLeaving: {
  //   opacity: 0,
  //   animation: `mui-ripple-exit ${DURATION}ms ${theme.transitions.easing.easeInOut}`,
  // },
  // /* Styles applied to the internal `Ripple` components `childPulsate` class. */
  // childPulsate: {
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   animation: `mui-ripple-pulsate 2500ms ${theme.transitions.easing.easeInOut} 200ms infinite`,
  // },
  // '@keyframes mui-ripple-enter': {
  //   '0%': {
  //     transform: 'scale(0)',
  //     opacity: 0.1,
  //   },
  //   '100%': {
  //     transform: 'scale(1)',
  //     opacity: 0.3,
  //   },
  // },
  // '@keyframes mui-ripple-exit': {
  //   '0%': {
  //     opacity: 1,
  //   },
  //   '100%': {
  //     opacity: 0,
  //   },
  // },
  // '@keyframes mui-ripple-pulsate': {
  //   '0%': {
  //     transform: 'scale(1)',
  //   },
  //   '50%': {
  //     transform: 'scale(0.92)',
  //   },
  //   '100%': {
  //     transform: 'scale(1)',
  //   },
  // },
});

class TouchRipple extends React.PureComponent {
  // Used to filter out mouse emulated events on mobile.
  ignoringMouseDown = false;

  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  startTimer = null;

  // This is the hook called once the previous timeout is ready.
  startTimerCommit = null;

  unique = 0;
  mounted = false;

  static defaultProps = {
    // ...TouchableWithoutFeedback.defaultProps,

    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    center: false,

    // onRippleAnimation: (animation, callback) => animation.start(callback),
  };

  constructor(props) {
    super(props);
    this.state = {
      nextKey: 0,
      width: 0,
      height: 0,
      ripples: [],
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.props.innerRef) {
      this.props.innerRef(this);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.startTimer);
  }

  onLayout = event => {
    // console.log("layout", event)
    let { width, height } = event.nativeEvent.layout;
    let { onLayout } = this.props;

    if ('function' === typeof onLayout) {
      onLayout(event);
    }

    this.setState({ width, height });
  };

  pulsate = () => {
    this.start({}, { pulsate: true });
  };

  onAnimationEnd = () => {
    if (this.mounted) {
      this.setState(state => ({ ...state, ripples: state.ripples.slice(1) }));
    }
  };

  start = (event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = this.props.center || options.pulsate,
      fakeElement = false, // For test purposes
    } = options;

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false;
      return;
    }

    if (event.type === 'touchstart') {
      this.ignoringMouseDown = true;
    }

    let { width, height } = this.state;
    let { rippleDuration, rippleSize, onRippleAnimation } = this.props;

    let w2 = 0.5 * width;
    let h2 = 0.5 * height;
    let { locationX, locationY } = center ? { locationX: w2, locationY: h2 } : event.nativeEvent;
    let offsetX = Math.abs(w2 - locationX);
    let offsetY = Math.abs(h2 - locationY);

    let R =
      rippleSize > 0
        ? 0.5 * rippleSize
        : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

    let ripple = {
      unique: this.unique++,
      progress: new Animated.Value(0),
      locationX,
      locationY,
      R,
    };

    let animation = Animated.timing(ripple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    });

    // onRippleAnimation(animation, this.onAnimationEnd);
    animation.start(this.onAnimationEnd);

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
    // this.state.fadeAnim.setValue(0)
    // Animated.timing(
    //   // Animate over time
    //   this.state.fadeAnim, // The animated value to drive
    //   {
    //     toValue: 1, // Animate to opacity: 1 (opaque)
    //     duration: 10000, // Make it take a while
    //   },
    // ).start();

    // const element = fakeElement ? null : ReactDOM.findDOMNode(this);
    // const rect = element
    //   ? element.getBoundingClientRect()
    //   : {
    //       width: 0,
    //       height: 0,
    //       left: 0,
    //       top: 0,
    //     };

    // // Get the size of the ripple
    // let rippleX;
    // let rippleY;
    // let rippleSize;

    // if (
    //   center ||
    //   (event.clientX === 0 && event.clientY === 0) ||
    //   (!event.clientX && !event.touches)
    // ) {
    //   rippleX = Math.round(rect.width / 2);
    //   rippleY = Math.round(rect.height / 2);
    // } else {
    //   const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
    //   const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
    //   rippleX = Math.round(clientX - rect.left);
    //   rippleY = Math.round(clientY - rect.top);
    // }

    // if (center) {
    //   rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

    //   // For some reason the animation is broken on Mobile Chrome if the size if even.
    //   if (rippleSize % 2 === 0) {
    //     rippleSize += 1;
    //   }
    // } else {
    //   const sizeX =
    //     Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
    //   const sizeY =
    //     Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
    //   rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    // }

    // // Touche devices
    // if (event.touches) {
    //   // Prepare the ripple effect.
    //   this.startTimerCommit = () => {
    //     this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
    //   };
    //   // Deplay the execution of the ripple effect.
    //   this.startTimer = setTimeout(() => {
    //     if (this.startTimerCommit) {
    //       this.startTimerCommit();
    //       this.startTimerCommit = null;
    //     }
    //   }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
    // } else {
    //   this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
    // }
  };

  // startCommit = params => {
  //   const { pulsate, rippleX, rippleY, rippleSize, cb } = params;

  //   this.setState(state => {
  //     return {
  //       nextKey: state.nextKey + 1,
  //       ripples: [
  //         ...state.ripples,
  //         <Ripple
  //           key={state.nextKey}
  //           classes={this.props.classes}
  //           timeout={{
  //             exit: DURATION,
  //             enter: DURATION,
  //           }}
  //           pulsate={pulsate}
  //           rippleX={rippleX}
  //           rippleY={rippleY}
  //           rippleSize={rippleSize}
  //         />,
  //       ],
  //     };
  //   }, cb);
  // };

  stop = (event, cb) => {
    // console.log('stopped');
    // clearTimeout(this.startTimer);
    // const { ripples } = this.state;
    // // The touch interaction occurs too quickly.
    // // We still want to show ripple effect.
    // if (event.type === 'touchend' && this.startTimerCommit) {
    //   event.persist();
    //   this.startTimerCommit();
    //   this.startTimerCommit = null;
    //   this.startTimer = setTimeout(() => {
    //     this.stop(event, cb);
    //   }, 0);
    //   return;
    // }
    // this.startTimerCommit = null;
    // if (ripples && ripples.length) {
    //   this.setState(
    //     {
    //       ripples: ripples.slice(1),
    //     },
    //     cb,
    //   );
    // }
  };

  renderRipple = ({ unique, progress, locationX, locationY, R }) => {
    let { rippleColor, rippleOpacity, rippleFades, classes } = this.props;
    let rippleStyle = {
      top: locationY - radius,
      left: locationX - radius,
      backgroundColor: rippleColor,
      transform: [
        {
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / radius, R / radius],
          }),
        },
      ],

      opacity: rippleFades
        ? progress.interpolate({
            inputRange: [0, 1],
            outputRange: [rippleOpacity, 0],
          })
        : rippleOpacity,
    };
    // console.log(unique);

    return <Animated.View style={[classes.ripple, rippleStyle]} key={unique} />;
  };

  render() {
    // const { center, classes, style, ...other } = this.props;
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
      classes,
      ...props
    } = this.props;
    // console.log(this.props);

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
      onLongPress: props.onLongPress ? onLongPress : undefined,
      onLayout,
    };

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius || 0,
    };

    // return (
    //   <TransitionGroup
    //     component="span"
    //     enter
    //     exit
    //     style={styleNames(classes.root, style)}
    //     {...other}
    //   >
    //     {this.state.ripples}
    //   </TransitionGroup>
    // );
    // console.log(this.state.fadeAnim);
    // return (
    //   <Animated.View
    //     style={{
    //       backgroundColor: this.state.fadeAnim.interpolate({
    //         inputRange: [0, 1],
    //         outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
    //       }), //`rgba(0,0,0,${this.state.fadeAnim})`,
    //       width: '100%',
    //       height: '100%',
    //       position: 'absolute',
    //       borderRadius: 'inherit',
    //     }}
    //   />
    // );
    // console.log(ripples);
    // return (
    //   <View onLayout={this.onLayout} style={[classes.container, containerStyle]}>{ripples.map(this.renderRipple).pop() || null}</View>
    // )
    return (
      <Animated.View
        {...props}
        onLayout={this.onLayout}
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
          position: 'absolute',
          overflow: 'hidden',
          borderRadius: 'inherit',
        }}
        pointerEvents="box-only"
      >
        <View style={[classes.container, containerStyle]}>{ripples.map(this.renderRipple)}</View>
      </Animated.View>
    );
  }
}

TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default withStyles(styles, { flip: false, name: 'MuiTouchRipple' })(TouchRipple);
