import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* Styles applied to the root element if `disableGutters={false}`. */
  gutters: theme.mixins.gutters(),
  /* Styles applied to the root element if `variant="regular"`. */
  regular: theme.mixins.toolbar,
  /* Styles applied to the root element if `variant="dense"`. */
  dense: {
    minHeight: 48,
  },
});

function Toolbar(props) {
  const { children, classes, style: styleProp, disableGutters, variant, ...other } = props;

  const style = styleNames(
    classes.root,
    classes[variant],
    {
      [classes.gutters]: !disableGutters,
    },
    styleProp,
  );

  return (
    <View style={style} {...other}>
      {children}
    </View>
  );
}

Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
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
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['regular', 'dense']),
};

Toolbar.defaultProps = {
  disableGutters: false,
  variant: 'regular',
};

export default withStyles(styles, { name: 'MuiToolbar' })(Toolbar);
