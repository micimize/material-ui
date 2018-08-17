import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '24px 24px 20px',
    flex: '0 0 auto',
  },
};

function DialogTitle(props) {
  const { children, classes, style, disableTypography, ...other } = props;

  return (
    <View style={styleNames(classes.root, style)} {...other}>
      {disableTypography ? children : <Typography variant="title">{children}</Typography>}
    </View>
  );
}

DialogTitle.propTypes = {
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
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: PropTypes.bool,
};

DialogTitle.defaultProps = {
  disableTypography: false,
};

export default withStyles(styles, { name: 'MuiDialogTitle' })(DialogTitle);
