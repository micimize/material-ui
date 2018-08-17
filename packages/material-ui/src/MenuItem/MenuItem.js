// @inheritedComponent ListItem

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import ListItem from '../ListItem';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    height: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    ...theme.typography.subheading,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  /* Styles applied to the root element if `selected={true}`. */
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
  selectedText: {},
});

function MenuItem(props) {
  const { classes, style, component, selected, role, ...other } = props;

  return (
    <ListItem
      button
      role={role}
      tabIndex={-1}
      style={styleNames(classes.root, { [classes.selected]: selected }, style)}
      classes={{ text: styleNames(classes.text, { [classes.selectedText]: selected }) }}
      component={component}
      {...other}
    />
  );
}

MenuItem.propTypes = {
  /**
   * Menu item contents.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  component: View,
  role: 'menuitem',
  selected: false,
};

export default withStyles(styles, { name: 'MuiMenuItem' })(MenuItem);
