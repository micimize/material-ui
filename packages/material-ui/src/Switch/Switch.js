import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import SwitchBase from '../internal/SwitchBase';

import { Animated } from '../styles/extended-styles';

/*
  TODO: This is a bit of a mess
*/

export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'row',
    width: 62,
    position: 'relative',
    flexShrink: 0,
  },
  /* Styles applied to the internal `SwitchBase` component's `root` class. */
  switchBase: {
    zIndex: 1,
  },
  /* Styles used to create the `icon` passed to the internal `SwitchBase` component `icon` prop. */
  icon: {
    left: 0,
    elevation: 1,
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
    transition: theme.transitions.create(['left', 'backgroundColor'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  /* Styles applied the icon element component if `checked={true}`. */
  iconChecked: {
    elevation: 2,
    left: 14,
  },
  iconDisabled: {
    elevation: 1,
  },
  /* Styles applied to the internal `SwitchBase` component's `checked` class. */
  checked: {},
  checkedBar: {
    opacity: 0.5,
  },
  /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
  switchBaseDisabled: {
    color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
  },
  /* Styles applied to the bar element. */
  bar: {
    borderRadius: 14 / 2,
    position: 'absolute',
    width: 34,
    height: 14,
    top: '50%',
    left: '50%',
    marginTop: -7,
    marginLeft: -10,
    transition: theme.transitions.create(['opacity', 'backgroundColor'], {
      duration: theme.transitions.duration.shortest,
    }),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
    opacity: theme.palette.type === 'light' ? 0.38 : 0.3,
  },
  barDisabled: {
    opacity: theme.palette.type === 'light' ? 0.12 : 0.1,
  },
  baseWithBarDisabled: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
  },
  colorPrimary: {},
  colorPrimaryChecked: {},
  colorPrimaryIcon: {
    backgroundColor: theme.palette.primary.main,
  },
  colorPrimaryCheckedBar: {
    backgroundColor: theme.palette.primary.main,
  },
  /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
  colorSecondary: {},
  colorSecondaryChecked: {},
  colorSecondaryIcon: {
    backgroundColor: theme.palette.secondary.main,
  },
  colorSecondaryCheckedBar: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function Switch(props) {
  const { classes, style, color, ...other } = props;

  return (
    <View style={styleNames(classes.root, style)}>
      <SwitchBase
        activeOpacity={1}
        classes={{
          root: styleNames(classes.switchBase, classes[`color${capitalize(color)}`]),
          checked: styleNames(classes.checked, classes[`color${capitalize(color)}Checked`]),
          disabled: styleNames(classes.disabled, classes.switchBaseDisabled),
        }}
        renderIcon={({ checked, style }) => (
          <>
            <Animated.View
              style={styleNames(classes.icon, style, {
                [classes.iconChecked]: checked,
                [classes[`color${capitalize(color)}Icon`]]: checked,
                [classes.iconDisabled]: other.disabled,
              })}
            />
            <Animated.View
              style={styleNames(classes.bar, {
                [classes[`color${capitalize(color)}CheckedBar`]]: checked,
                [classes.checkedBar]: checked,
                [classes.barDisabled]: other.disabled,
              })}
            />
          </>
        )}
      />
    </View>
  );
}

Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
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
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.bool,
};

Switch.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles, { name: 'MuiSwitch' })(Switch);
