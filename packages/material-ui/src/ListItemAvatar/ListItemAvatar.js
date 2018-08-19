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
function ListItemAvatar(props, context) {
  const { children, classes, style: styleProp, ...other } = props;

  if (context.dense === undefined) {
    warning(
      false,
      `Material-UI: <ListItemAvatar> is a simple wrapper to apply the dense styles
      to <Avatar>. You do not need it unless you are controlling the <List> dense property.`,
    );
    return props.children;
  }

  return React.cloneElement(children, {
    style: styleNames(
      { [classes.root]: context.dense },
      styleProp,
      children.props.className,
    ),
    childrenClassName: styleNames(
      { [classes.icon]: context.dense },
      children.props.childrenClassName,
    ),
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
};

ListItemAvatar.contextTypes = {
  dense: PropTypes.bool,
};

ListItemAvatar.muiName = 'ListItemAvatar';

export default withStyles(styles, { name: 'MuiListItemAvatar' })(ListItemAvatar);
