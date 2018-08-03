import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'react-native-style-names';

/**
 * @ignore - internal component.
 */
function NativeSelectInput(props) {
  const {
    children,
    classes,
    style,
    disabled,
    IconComponent,
    inputRef,
    name,
    onChange,
    value,
    ...other
  } = props;

  return (
    <View style={classes.root}>
      <select
        style={classNames(
          classes.select,
          {
            [classes.disabled]: disabled,
          },
          style,
        )}
        name={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        ref={inputRef}
        {...other}
      >
        {children}
      </select>
      <IconComponent style={classes.icon} />
    </View>
  );
}

NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
  /**
   * The input value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NativeSelectInput;
