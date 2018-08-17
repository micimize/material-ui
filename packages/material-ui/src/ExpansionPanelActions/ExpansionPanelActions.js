import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export const styles = {
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '16px 8px',
  },
  /* Styles applied to the children. */
  action: {
    marginLeft: 8,
  },
};

function ExpansionPanelActions(props) {
  const { children, classes, style, ...other } = props;

  return (
    <View style={styleNames(classes.root, style)} {...other}>
      {cloneChildrenWithClassName(children, classes.action)}
    </View>
  );
}

ExpansionPanelActions.propTypes = {
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
};

export default withStyles(styles, { name: 'MuiExpansionPanelActions' })(ExpansionPanelActions);
