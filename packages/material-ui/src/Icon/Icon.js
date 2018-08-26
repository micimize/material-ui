import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import styleNames from '../styles/react-native-style-names';

import NativeIcon from '@expo/vector-icons/MaterialIcons';

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: 24,
    height: 24,
    fontSize: 24,
    flexShrink: 0,
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  /* Styles applied to the root element if `color="onPrimary"`. */
  colorOnPrimary: {
    color: theme.palette.primary.contrastText,
  },
  /* Styles applied to the root element if `color="onSecondary"`. */
  colorOnSecondary: {
    color: theme.palette.secondary.contrastText,
  },
  /* Styles applied to the root element if `color="action"`. */
  colorAction: {
    color: theme.palette.action.active,
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main,
  },
  /* Styles applied to the root element if `color="disabled"`. */
  colorDisabled: {
    color: theme.palette.action.disabled,
  }
});

/* TODO doesn't work right now, maybe use react-native-vector-icons */
function Icon(props) {
  const { children, classes, style, color, ...other } = props;

  return (
    <NativeIcon
      name={children.replace(/_/g, '-')}
      style={styleNames(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
        },
        style,
      )}
      {...other}
    />
  );
}

Icon.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.string,
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
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'onPrimary', 'onSecondary', 'action', 'error', 'disabled']),
};

Icon.defaultProps = {
  color: 'default',
};

Icon.muiName = 'Icon';

export default withStyles(styles, { name: 'MuiIcon' })(Icon);
