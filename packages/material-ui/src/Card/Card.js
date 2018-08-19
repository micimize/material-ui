// @inheritedComponent Paper

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    // overflow: 'hidden',
  },
};

function Card(props) {
  const { classes, style, raised, ...other } = props;

  return <Paper style={styleNames(classes.root, style)} elevation={raised ? 8 : 1} {...other} />;
}

Card.propTypes = {
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
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool,
};

Card.defaultProps = {
  raised: false,
};

export default withStyles(styles, { name: 'MuiCard' })(Card);
