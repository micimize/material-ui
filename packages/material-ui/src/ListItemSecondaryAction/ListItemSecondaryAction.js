import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from 'react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

function ListItemSecondaryAction(props) {
  const { children, classes, style, ...other } = props;

  return (
    <View style={styleNames(classes.root, style)} {...other}>
      {children}
    </View>
  );
}

ListItemSecondaryAction.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or selection control.
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

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

export default withStyles(styles, { name: 'MuiListItemSecondaryAction' })(ListItemSecondaryAction);
