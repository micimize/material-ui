import React from 'react';
import { View } from '../styles/extended-styles/animated';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const duration = theme.transitions.duration.shortest;
  return {
    root: {
      overflow: 'visible',
      width: '100%',
      paddingLeft: 7.5,
      paddingRight: 7.5,
      opacity: 0,
      transition: {
        easing: 'ease-in-out',
        duration: duration,
        animation: 'stackedFadeOut',
      },
    },
    collapsed: {
      zIndex: 0,
      height: 0,
    },
    expanded: {
      position: 'relative',
      zIndex: 1,
      opacity: 1,
      transition: {
        easing: 'ease-in-out',
        animation: 'stackedFadeIn',
        duration: duration,
      },
    },
  };
};

class BackdropBackSection extends React.Component {
  state = { position: {} };

  /*
  onLayout = event => {
    const {
      nativeEvent: {
        layout: { x, y },
      },
    } = event;
    // TODO holding out for
    // the fix in https://github.com/facebook/react-native/commit/b81c8b51fc6fe3c2dece72e3fe500e175613c5d4
    // might even be unneeded with height: 0 overflow: visible
    if (this.props.expanded) {
      this.setState({ position: { left: x, top: y } });
    }
  };
  */

  componentDidReceiv;

  render() {
    const { children, classes, style: styleProp, expanded, ...other } = this.props;

    const style = styleNames(
      classes.root,
      styleProp,
      {
        [classes.collapsed]: !expanded,
        [classes.expanded]: expanded,
      },
      // !expanded && this.state.position,
    );

    return (
      <View useNativeDriver style={style} {...other} onLayout={this.onLayout}>
        {children}
      </View>
    );
  }
}

BackdropBackSection.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * If `true`, expand to reveal section.
   */
  expanded: PropTypes.bool,
};

BackdropBackSection.defaultProps = {
  expanded: false,
};

export default withStyles(styles, { name: 'MuiBackdropBackSection' })(BackdropBackSection);
