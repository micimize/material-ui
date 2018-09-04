import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: 36,
    height: 36,
    fontSize: 18,
    marginRight: 4,
  },
  /* Styles applied to the children – typically the `Avatar` component. */
  icon: {
    width: 20,
    height: 20,
    fontSize: 20,
  },
});

/**
 * This is a simple wrapper to apply the `dense` mode styles to `Avatar`.
 */
function ListItemAvatar(props) {
  const { children, classes, style: styleProp, dense, ...other } = props;

  return React.cloneElement(children, {
    style: styleNames({ [classes.root]: dense }, styleProp, children.props.className),
    childrenClassName: styleNames({ [classes.icon]: dense }, children.props.childrenClassName),
    ...other,
  });
}

ListItemAvatar.propTypes = {
  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element.isRequired,
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
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
};

ListItemAvatar.muiName = 'ListItemAvatar';

export default withStyles(styles, { name: 'MuiListItemAvatar' })(ListItemAvatar);
