// @inheritedComponent ButtonBase

import React from 'react';
import { View, Text, TouchableOpacity as ReactNativeButton } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import stylesOf from '../styles/stylesOf';
import { fade } from '../styles/colorManipulator';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';
import { Animated } from '../styles/extended-styles';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    minWidth: 64,
    minHeight: 36,
    padding: '8px 16px',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['backgroundColor', 'elevation'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      // textDecorationLine: 'none',
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '[disabled="true"]': {
        backgroundColor: 'transparent',
      },
    },
  },
  disabled: {},
  /* Styles applied to the root element if `disabled={true}`. */
  disabledText: {
    color: theme.palette.action.disabled,
  },
  /* Styles applied to the span element that wraps the children. */
  label: {
    width: '100%', // assure the correct width for iOS Safari
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    /*
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    */
  },
  labelText: {
    ...theme.typography.button,
    lineHeight: 20, // Improve readability for multiline button.
    color: theme.palette.text.primary,
  },
  /* Styles applied to the root element if `variant="text"`. */
  text: {},
  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  textPrimaryText: {
    color: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  textSecondaryText: {
    color: theme.palette.secondary.main,
  },
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flat: {},
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flatPrimary: {},
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  flatSecondary: {},
  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    border: `1px solid ${
      theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
    }`,
  },
  /* Styles applied to the root element if `variant="[contained | fab]"`. */
  contained: {
    backgroundColor: theme.palette.grey[300],
    elevation: 2,
    '[focusVisible="true"]': {
      boxShadow: theme.shadows[6],
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.grey[300],
      },
    },
  },
  containedText: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
  },
  containedActive: {
    elevation: 8,
  },
  containedDisabled: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground,
    elevation: 0,
  },
  contanerDisabledText: {
    color: theme.palette.action.disabled,
  },
  /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  containedPrimaryText: {
    color: theme.palette.primary.contrastText,
  },
  /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
  containedSecondary: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  containedSecondaryText: {
    color: theme.palette.secondary.contrastText,
  },
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raised: {}, // legacy
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raisedPrimary: {}, // legacy
  /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
  raisedSecondary: {}, // legacy
  /* Styles applied to the root element if `variant="[fab | extendedFab]"`. */
  fab: {
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    elevation: 6,
  },
  fabActive: {
    elevation: 12,
  },
  /* Styles applied to the root element if `variant="extendedFab"`. */
  extendedFab: {
    borderRadius: 48 / 2,
    padding: '0 16px',
    width: 'auto',
    minWidth: 48,
    height: 48,
  },
  /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /* Styles applied to the root element if `size="mini"` & `variant="[fab | extendedFab]"`. */
  mini: {
    width: 40,
    height: 40,
  },
  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    padding: '7px 8px',
    minWidth: 64,
    minHeight: 32,
    // fontSize: theme.typography.pxToRem(13),
  },
  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    padding: '8px 24px',
    minWidth: 112,
    minHeight: 40,
    // fontSize: theme.typography.pxToRem(15),
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%',
  },
});

function Button(props) {
  const {
    children,
    classes,
    style: styleProp,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    focusVisibleStyle,
    mini,
    size,
    variant,
    ...other
  } = props;

  const fab = variant === 'fab' || variant === 'extendedFab';
  const contained = variant === 'contained' || variant === 'raised';
  const text = variant === 'text' || variant === 'flat' || variant === 'outlined';
  const style = [
    stylesOf(
      classes,
      {
        root: true,
      },
      {
        fab,
        mini: fab && mini,
        extendedFab: variant === 'extendedFab',
        text: text,
        textPrimary: text && color === 'primary',
        textSecondary: text && color === 'secondary',
        flat: variant === 'text' || variant === 'flat',
        flatPrimary: (variant === 'text' || variant === 'flat') && color === 'primary',
        flatSecondary: (variant === 'text' || variant === 'flat') && color === 'secondary',
        contained: contained || fab,
        containedPrimary: (contained || fab) && color === 'primary',
        containedSecondary: (contained || fab) && color === 'secondary',
        raised: contained || fab,
        raisedPrimary: (contained || fab) && color === 'primary',
        raisedSecondary: (contained || fab) && color === 'secondary',
        outlined: variant === 'outlined',
        [`size${capitalize(size)}`]: size !== 'medium',
        fullWidth: fullWidth,
      },
      {
        containedDisabled: (contained || fab) && disabled,
        disabled: disabled,
      },
    ),
    styleProp,
  ];

  const textStyle = stylesOf(
    classes,
    {
      labelText: true,
      textPrimaryText: text && color === 'primary',
      textSecondaryText: text && color === 'secondary',
    },
    {
      containedText: contained || fab,
      containedPrimaryText: (contained || fab) && color === 'primary',
      containedSecondaryText: (contained || fab) && color === 'secondary',
    },
    {
      disabledText: disabled,
      containedDisabledText: (contained || fab) && disabled,
    },
  );

  return (
    <ButtonBase
      classes={
        fab
          ? {
              active: classes.fabActive,
            }
          : contained
            ? {
                active: classes.containedActive,
              }
            : {}
      }
      style={style}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleStyle={styleNames(classes.focusVisible, focusVisibleStyle)}
      {...other}
    >
      <View style={classes.label}>
        {typeof children === 'string' ? <Text style={textStyle}>{children}</Text> : children}
      </View>
    </ButtonBase>
  );
}

Button.propTypes = {
  /**
   * The content of the button.
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
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf([
    'text',
    'flat',
    'outlined',
    'contained',
    'raised',
    'fab',
    'extendedFab',
  ]),
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text',
};

export default withStyles(styles, { name: 'MuiButton' })(Button);
