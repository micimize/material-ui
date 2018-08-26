import React from 'react';
import { View } from '../styles/extended-styles/animated';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    zIndex: 0,
    opacity: 0,
    zIndex: -1,
    transition: theme.transitions.create(['opacity', 'zIndex'], {
      easing: 'ease-in-out',
      duration: theme.transitions.duration.shortest,
    }),
  },
  in: {
    zIndex: 1,
    opacity: 1,
  },
});

function Fade(props) {
  const { children, classes, style: styleProp, in: inProp, ...other } = props;

  const style = [classes.root, inProp && classes.in, styleProp]
  return (
    <View style={style} {...other}>{children}</View>
  );
}

Fade.propTypes = {
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
  in: PropTypes.bool,
};

Fade.defaultProps = {
  in: false,
};

export default withStyles(styles, { name: 'MuiFade' })(Fade);
