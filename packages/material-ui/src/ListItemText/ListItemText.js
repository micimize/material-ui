import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    padding: '0 16px',
    '&:first-child': {
      paddingLeft: 0,
    },
  },
  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    '&:first-child': {
      paddingLeft: 56,
    },
  },
  /* Styles applied to the root element if `props.dense` is `true`. */
  dense: {
    fontSize: 13,
  },
  /* Styles applied to the primary `Typography` component. */
  primary: {
    '[textDense="true"]': {
      fontSize: 'inherit',
    },
  },
  /* Styles applied to the secondary `Typography` component. */
  secondary: {
    '[textDense="true"]': {
      fontSize: 'inherit',
    },
  },
  /* Styles applied to the `Typography` components if `context.dense` is `true`. */
  textDense: {},
});

function ListItemText(props, context) {
  const {
    children,
    classes,
    style: styleProp,
    disableTypography,
    inset,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    dense,
    ...other
  } = props;

  let primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = (
      <Typography
        variant="subheading"
        style={[classes.primary, dense && classes.textDense]}
        {...primaryTypographyProps}
      >
        {primary}
      </Typography>
    );
  }

  let secondary = secondaryProp;
  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = (
      <Typography
        variant="body1"
        style={[classes.secondary, dense && classes.textDense]}
        color="textSecondary"
        {...secondaryTypographyProps}
      >
        {secondary}
      </Typography>
    );
  }

  return (
    <View
      style={[classes.root, dense && classes.dense, inset && classes.inset, styleProp]}
      {...other}
    >
      {primary}
      {secondary}
    </View>
  );
}

ListItemText.propTypes = {
  /**
   * Alias for the `primary` property.
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
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  /**
   * The main content element.
   */
  primary: PropTypes.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: PropTypes.object,
  /**
   * The secondary content element.
   */
  secondary: PropTypes.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: PropTypes.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
};

ListItemText.defaultProps = {
  disableTypography: false,
  inset: false,
  dense: false,
};

export default withStyles(styles, { name: 'MuiListItemText' })(ListItemText);
