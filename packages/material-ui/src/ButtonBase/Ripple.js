import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import Transition from 'react-transition-group/Transition';

/**
 * @ignore - internal component.
 */
class Ripple extends React.Component {
  state = {
    visible: false,
    leaving: false,
  };

  handleEnter = () => {
    this.setState({
      visible: true,
    });
  };

  handleExit = () => {
    this.setState({
      leaving: true,
    });
  };

  render() {
    const {
      classes,
      style: styleProp,
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      ...other
    } = this.props;
    const { visible, leaving } = this.state;

    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX,
    };

    const style = styleNames(
      classes.ripple,
      {
        [classes.rippleVisible]: visible,
        [classes.ripplePulsate]: pulsate,
      },
      styleProp,
      rippleStyles,
    );

    const childStyle = styleNames(classes.child, {
      [classes.childLeaving]: leaving,
      [classes.childPulsate]: pulsate,
    });

    return (
      <Transition onEnter={this.handleEnter} onExit={this.handleExit} {...other}>
        <View style={style}>
          <View style={childStyle} />
        </View>
      </Transition>
    );
  }
}

Ripple.propTypes = {
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
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number,
};

Ripple.defaultProps = {
  pulsate: false,
};

export default Ripple;
