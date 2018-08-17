import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import AnimatedHeight from '../internal/animated-height';

export const styles = {
  root: {
    overflow: 'auto',
  },
  content: {
    width: '100%',
  },
};

const FADE_OUT = 150;
const EXPAND = 150;

function BackdropFrontContent(props) {
  const {
    classes: { root, ...classes },
    style: styleProp,
    expanded,
    ...other
  } = props;

  const style = styleNames(root, styleProp);

  const animationProps = {
    classes,
    style,
    delay: FADE_OUT,
    duration: EXPAND,
    height: expanded ? 'auto' : 0,
  };

  return <AnimatedHeight {...animationProps} {...other} />;
}

BackdropFrontContent.propTypes = {
  /**
   * The content of the front panel.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   * If `true`, parent panel is expanded.
   */
  expanded: PropTypes.bool,
};

BackdropFrontContent.defaultProps = {
  expanded: true,
};

BackdropFrontContent.muiName = 'BackdropFrontContent';

export default withStyles(styles, { name: 'MuiBackdropFrontContent' })(BackdropFrontContent);
