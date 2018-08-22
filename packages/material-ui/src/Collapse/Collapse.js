import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import AnimatedHeight from '../internal/animated-height';

export const styles = {
  root: {
    width: '100%',
  },
  expanded: {
  },
};

function Collapse(props) {
  const { children, classes, style: styleProp, in: expanded, duration, ...other } = props;

  const style = styleNames(classes.root, styleProp, { [classes.expanded]: expanded });

  const animationProps = {
    duration,
    height: expanded ? 'auto' : 0,
  };

  return (
    <AnimatedHeight {...animationProps} {...other}>
      {children}
    </AnimatedHeight>
  );
}

Collapse.propTypes = {
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

Collapse.defaultProps = {
  in: false,
  duration: 150
};

export default withStyles(styles, { name: 'MuiCollapse' })(Collapse);
