import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    // fit to content
    flexGrow: 0,
    flexShrink: 0,
  },
};

function BackdropBack(props) {
  const { children, classes, style: styleProp, ...other } = props;

  const style = styleNames(classes.root, styleProp);

  return (
    <View style={style} {...other}>
      {children}
    </View>
  );
}

BackdropBack.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: 'MuiBackdropBack' })(BackdropBack);
