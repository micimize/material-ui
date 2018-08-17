// @inheritedComponent ButtonBase

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import { fade } from '../styles/colorManipulator';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
    width: 48,
    height: 48,
    padding: 0,
    borderRadius: '50%',
    // color: theme.palette.action.active,
    transition: theme.transitions.create('backgroundColor', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '[disabled="true"]': {
        backgroundColor: 'transparent',
      },
    },
    '[disabled="true"]': {
      // color: theme.palette.action.disabled,
    },
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    // color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    // color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the children container element. */
  label: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
function IconButton(props) {
  const { children, classes, style, color, disabled, ...other } = props;

  return (
    <ButtonBase
      style={styleNames(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
          [classes.disabled]: disabled,
        },
        style,
      )}
      centerRipple
      focusRipple
      disabled={disabled}
      {...other}
    >
      <View style={classes.label}>{children}</View>
    </ButtonBase>
  );
}

IconButton.propTypes = {
  /**
   * The icon element.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,
};

IconButton.defaultProps = {
  color: 'default',
  disabled: false,
};

export default withStyles(styles, { name: 'MuiIconButton' })(IconButton);
