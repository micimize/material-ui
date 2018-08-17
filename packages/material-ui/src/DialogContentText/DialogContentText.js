// @inheritedComponent Typography

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: theme.palette.text.secondary,
  },
});

function DialogContentText(props) {
  const { children, classes, style, ...other } = props;

  return (
    <Typography
      component="p"
      variant="subheading"
      style={styleNames(classes.root, style)}
      {...other}
    >
      {children}
    </Typography>
  );
}

DialogContentText.propTypes = {
  /**
   * The content of the component.
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
};

export default withStyles(styles, { name: 'MuiDialogContentText' })(DialogContentText);
