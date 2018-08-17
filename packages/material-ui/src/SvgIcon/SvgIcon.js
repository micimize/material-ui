import React from 'react';
import { StyleSheet } from 'react-native';
import Svg from 'svgs';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    userSelect: 'none',
    width: 24,
    height: 24,
    // fill: 'currentColor',
    flexShrink: 0,
    /* TODO is a context-based em and color inheritence system worth it
    width: '1em',
    height: '1em',
    */
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  /*
  icon: {
    fontSize: 24,
  },
  */
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main,
    fill: theme.palette.secondary.main,
  },
  /* Styles applied to the root element if `color="saction"`. */
  colorAction: {
    color: theme.palette.action.active,
    fill: theme.palette.action.active,
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main,
    fill: theme.palette.error.main,
  },
  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled,
    fill: theme.palette.action.disabled,
  },

  /* Styles applied to the root element if `color="onDefault"`. */
  colorOnDefault: {
    color: theme.palette.getContrastText(
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    ),
    fill: theme.palette.getContrastText(
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    ),
  },
  /* Styles applied to the root element if `color="onPrimary"`. */
  colorOnPrimary: {
    color: theme.palette.primary.contrastText,
    fill: theme.palette.primary.contrastText,
  },
  /* Styles applied to the root element if `color="onSecondary"`. */
  colorOnSecondary: {
    color: theme.palette.secondary.contrastText,
    fill: theme.palette.secondary.contrastText,
  },
  /* Styles applied to the root element if `fontSize="inherit"`. */
  /*
  fontSizeInherit: {
    fontSize: 'inherit',
  },
  */
});

function SvgIcon(props) {
  const {
    children,
    classes,
    style: styleProp,
    color,
    component: Component,
    // fontSize,
    nativeColor,
    titleAccess,
    viewBox,
    ...other
  } = props;

  // TODO optimize styles, svgs doesn't support native styles
  const style = styleNames(
    classes.root,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
    },
    styleProp,
  );

  return (
    <Component
      style={StyleSheet.flatten(style)}
      focusable="false"
      viewBox={viewBox}
      color={nativeColor}
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
}

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'onPrimary',
    'secondary',
    'onSecondary',
    'action',
    'error',
    'disabled',
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  // fontSize: PropTypes.oneOf(['inherit', 'default']),
  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  color: 'default',
  component: Svg,
  // fontSize: 'default',
  viewBox: '0 0 24 24',
};

SvgIcon.muiName = 'SvgIcon';

export default withStyles(styles, { name: 'MuiSvgIcon' })(SvgIcon);
