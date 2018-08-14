// https://github.com/Stanko/react-animate-height/blob/master/source/AnimateHeight.js
import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '@material-ui/core/styles/withStyles';
import { View } from 'react-native-animatable';

const styles = {
  animating: {},
  animatingUp: {},
  animatingDown: {},
  animatingToHeightZero: {},
  animatingToHeightAuto: {},
  animatingToHeightSpecific: {},
  static: {},
  staticHeightZero: {},
  staticHeightAuto: {},
  staticHeightSpecific: {},
  content: {},
  contentAtZero: {},
};

// Start animation helper using nested requestAnimationFrames
function startAnimationHelper(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function runCallback(callback) {
  if (callback && typeof callback === 'function') {
    callback();
  }
}

const AnimateHeight = class extends React.Component {
  constructor(props) {
    super(props);

    let height = 'auto';
    let overflow = 'visible';

    if (isNumber(props.height)) {
      height = props.height < 0 ? 0 : props.height;
      overflow = 'hidden';
    } else if (
      // Percentage height
      typeof props.height === 'string' &&
      props.height.search('%') === props.height.length - 1 &&
      isNumber(props.height.substr(0, props.height.length - 1))
    ) {
      height = props.height;
      overflow = 'hidden';
    }

    const animationStateClasses = this.getStaticStateClasses(height);

    this.state = {
      animationStateClasses,
      height,
      overflow,
      shouldUseTransitions: false,
    };
  }

  componentDidMount() {
    const { height } = this.state;

    // Hide content if height is 0 (to prevent tabbing into it)
    // Check for contentElement is added cause this would fail in tests (react-test-renderer)
    // Read more here: https://github.com/Stanko/react-animate-height/issues/17
    if (this.state.contentHeight !== undefined) {
      this.hideContent(height);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { delay, duration, height, onAnimationEnd, onAnimationStart } = this.props;

    // Check if 'height' prop has changed
    if (height !== prevProps.height) {
      const contentHeight = this.state.contentHeight || 0;

      // Remove hidden state if it was hidden to prevent tabbing into it
      this.showContent(prevState.height);

      // set total animation time
      const totalDuration = duration + delay;

      let newHeight = null;
      const timeoutState = {
        height: null, // it will be always set to either 'auto' or specific number
        overflow: 'hidden',
      };
      const isCurrentHeightAuto = prevState.height === 'auto';

      if (isNumber(height)) {
        // If new height is a number
        newHeight = height < 0 ? 0 : height;
        timeoutState.height = newHeight;
      } else if (
        // Percentage height
        typeof height === 'string' &&
        height.search('%') === height.length - 1 &&
        isNumber(height.substr(0, height.length - 1))
      ) {
        newHeight = height;
        timeoutState.height = newHeight;
      } else {
        // If not, animate to content height
        // and then reset to auto
        newHeight = contentHeight; // TODO solve contentHeight = 0
        timeoutState.height = 'auto';
        timeoutState.overflow = null;
      }

      if (isCurrentHeightAuto) {
        // This is the height to be animated to
        timeoutState.height = newHeight;

        // If previous height was 'auto'
        // set starting height explicitly to be able to use transition
        newHeight = contentHeight;
      }

      // Animation classes
      const animationStateClasses = styleNames(this.props.classes.animating, {
        [this.props.classes.animating]: true,
        [this.props.classes.animatingUp]: prevProps.height === 'auto' || height < prevProps.height,
        [this.props.classes.animatingDown]: height === 'auto' || height > prevProps.height,
        [this.props.classes.animatingToHeightZero]: timeoutState.height === 0,
        [this.props.classes.animatingToHeightAuto]: timeoutState.height === 'auto',
        [this.props.classes.animatingToHeightSpecific]: timeoutState.height > 0,
      });

      // Animation classes to be put after animation is complete
      const timeoutAnimationStateClasses = this.getStaticStateClasses(timeoutState.height);

      // Set starting height and animating classes
      // We are safe to call set state as it will not trigger infinite loop
      // because of the "height !== prevProps.height" check
      this.setState({
        // eslint-disable-line react/no-did-update-set-state
        animationStateClasses,
        height: newHeight,
        overflow: 'hidden',
        // When animating from 'auto' we first need to set fixed height
        // that change should be animated
        shouldUseTransitions: !isCurrentHeightAuto,
      });

      // Clear timeouts
      clearTimeout(this.timeoutID);
      clearTimeout(this.animationClassesTimeoutID);

      if (isCurrentHeightAuto) {
        // When animating from 'auto' we use a short timeout to start animation
        // after setting fixed height above
        timeoutState.shouldUseTransitions = true;

        startAnimationHelper(() => {
          this.setState(timeoutState);

          // ANIMATION STARTS, run a callback if it exists
          runCallback(onAnimationStart);
        });

        // Set static classes and remove transitions when animation ends
        this.animationClassesTimeoutID = setTimeout(() => {
          this.setState({
            animationStateClasses: timeoutAnimationStateClasses,
            shouldUseTransitions: false,
          });

          // ANIMATION ENDS
          // Hide content if height is 0 (to prevent tabbing into it)
          this.hideContent(timeoutState.height);
          // Run a callback if it exists
          runCallback(onAnimationEnd);
        }, totalDuration);
      } else {
        // ANIMATION STARTS, run a callback if it exists
        runCallback(onAnimationStart);

        // Set end height, classes and remove transitions when animation is complete
        this.timeoutID = setTimeout(() => {
          timeoutState.animationStateClasses = timeoutAnimationStateClasses;
          timeoutState.shouldUseTransitions = false;

          this.setState(timeoutState);

          // ANIMATION ENDS
          // If height is auto, don't hide the content
          // (case when element is empty, therefore height is 0)
          if (height !== 'auto') {
            // Hide content if height is 0 (to prevent tabbing into it)
            this.hideContent(newHeight); // TODO solve newHeight = 0
          }
          // Run a callback if it exists
          runCallback(onAnimationEnd);
        }, totalDuration);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
    clearTimeout(this.animationClassesTimeoutID);
    this.timeoutID = null;
    this.animationClassesTimeoutID = null;
  }

  showContent(height) {
    if (height === 0) {
      this.setState({ hidden: false });
    }
  }

  hideContent(newHeight) {
    if (newHeight === 0) {
      //this.setState({ hidden: true });
    }
  }

  getStaticStateClasses = height =>
    styleNames(this.props.classes.static, {
      [this.props.classes.staticHeightZero]: height === 0,
      [this.props.classes.staticHeightSpecific]: height > 0,
      [this.props.classes.staticHeightAuto]: height === 'auto',
    });

  render() {
    const {
      children,
      classes,
      duration,
      easing,
      delay,
      style,
      onAnimationStart,
      onAnimationEnd,
      height: __height,
      animationStateClasses: __animationStateClasses,
      ...props
    } = this.props;
    const {
      height,
      contentHeight,
      overflow,
      animationStateClasses,
      shouldUseTransitions,
      hidden,
    } = this.state;

    const wrapperStyle = styleNames(
      animationStateClasses,
      { overflow },
      height === 'auto' ? { height: contentHeight } : { height },
      style,
    );

    const transitionProps = shouldUseTransitions
      ? {
          transition: 'height',
          duration,
          easing,
          delay,
        }
      : {};

    const contentStyle = styleNames(classes.content, {
      [classes.contentAtZero]: height === 0,
    });

    return (
      <View {...props} style={wrapperStyle} {...transitionProps}>
        <View
          style={contentStyle}
          onLayout={event => {
            const contentHeight = event.nativeEvent.layout.height;
            if (contentHeight) {
              this.setState({ contentHeight });
            }
          }}
        >
          {hidden || children}
        </View>
      </View>
    );
  }
};

AnimateHeight.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onAnimationEnd: PropTypes.func,
  onAnimationStart: PropTypes.func,
  style: PropTypes.object,
};

AnimateHeight.defaultProps = {
  duration: 250,
  delay: 0,
  easing: 'ease',
  style: {},
};

export default withStyles(styles)(AnimateHeight);
