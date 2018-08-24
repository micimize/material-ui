import React from 'react';
import { View } from '../styles/extended-styles/animated';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import AnimatedHeight from '../internal/animated-height';

const FADE_OUT = 150;
const EXPAND = 150;

export const styles = theme => ({
  root: {
    width: '100%',
    paddingLeft: 7.5,
    paddingRight: 7.5,

    zIndex: 0,
    opacity: 0,
    zIndex: 0,
    transition: theme.transitions.create(['opacity', 'zIndex'], {
      easing: 'ease-in-out',
      duration: theme.transitions.duration.shortest,
    }),
  },
  expanded: {
    zIndex: 1,
    opacity: 1,
    zIndex: 1,
    transition: theme.transitions.create(['opacity', 'zIndex'], {
      duration: theme.transitions.duration.shortest,
      easing: 'ease-in-out',
      delay: 150,
    }),
  },
});

function BackdropBackSection(props) {
  const { children, classes, style: styleProp, expanded, ...other } = props;

  const style = styleNames(classes.root, styleProp, { [classes.expanded]: expanded });

  const animationProps = {
    delay: FADE_OUT,
    duration: EXPAND,
    height: expanded ? 'auto' : 0,
  };

  return (
      <AnimatedHeight {...animationProps} {...other}>
        <View style={style}>{children}</View>
      </AnimatedHeight>
  );
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
