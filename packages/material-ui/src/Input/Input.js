import React from 'react';
import { View, Text, TextInput } from 'react-native';
// TODO might be unnecessary
// import { TextInput } from '../styles/extended-styles/focusable';
import { View as Underline } from '../styles/extended-styles/animated';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
export function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

// Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.
export function isFilled(obj, includeDefault = false) {
  return (
    obj &&
    ((hasValue(obj.value) && obj.value !== '') ||
      (includeDefault && hasValue(obj.defaultValue) && obj.defaultValue !== ''))
  );
}

// Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.
export function isAdornedStart(obj) {
  return obj.startAdornment;
}

export const styles = theme => {
  const light = theme.palette.type === 'light';
  /*
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  };
  */
  /*
  const placeholderHidden = {
    opacity: 0,
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5,
  };
  */
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';

  return {
    /* Styles applied to the root element. */
    root: {
      // Mimics the default input display property used by browsers for an input.
      flexDirection: 'row',
      '[disabled="true"]': {
        color: theme.palette.text.disabled,
      },
    },
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      marginTop: 16,
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `disabledUnderline={false}`. */
    underline: {
      borderBottom: `2px solid ${theme.palette.primary[light ? 'dark' : 'light']}`,
      left: 0,
      bottom: 0,
      position: 'absolute',
      right: 0,
      transform: [{ scaleX: 0 }],
      transition: theme.transitions.create('scaleX', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    underlineFocused: {
      transform: [{ scaleX: 1 }],
    },
    underlineError: {
      borderBottomColor: theme.palette.error.main,
      transform: [{ scaleX: 1 }],
    },
    /* Styles applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%',
    },
    /* Styles applied to the `input` element. */
    input: {
      lineHeight: 19, // '1.1875em', // Reset (19px), match the native input line-height
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      color: light ? 'rgba(0, 0, 0, 0.87)' : theme.palette.common.white,
      paddingTop: 8 - 2,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 8 - 2,
      borderWidth: 0,
      // textAlignVertical: 'middle',
      margin: 0, // Reset for Safari
      // Remove grey highlight
      // WebkitTapHighlightColor: 'transparent',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      flexGrow: 1,
      borderBottom: `1px solid ${bottomLineColor}`,
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1,
    },
    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      // height: '1.1875em', // Reset (19px), match the native input line-height
    },
    /* Styles applied to the `input` element if `type="search"`. */
    /*
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield',
    },
    */
  };
};

function formControlState(props, context) {
  let disabled = props.disabled;
  let error = props.error;
  let margin = props.margin;
  let required = props.required;

  if (context && context.muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = context.muiFormControl.disabled;
    }
    if (typeof error === 'undefined') {
      error = context.muiFormControl.error;
    }
    if (typeof margin === 'undefined') {
      margin = context.muiFormControl.margin;
    }
    if (typeof required === 'undefined') {
      required = context.muiFormControl.required;
    }
  }

  return {
    disabled,
    error,
    margin,
    required,
  };
}

class Input extends React.Component {
  isControlled = this.props.value != null;

  constructor(props, context) {
    super(props, context);

    if (this.isControlled) {
      this.state.value = '';
    }

    if (this.isControlled) {
      this.checkDirty();
    }

  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    // Book keep the focused state.
    if (
      !formControlState(this.props, this.context).disabled &&
      formControlState(nextProps, nextContext).disabled
    ) {
      const { muiFormControl } = this.context;
      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur();
      }
    }
  };


  state = {
    focused: false,
    dirty: false,
  };

  getChildContext() {
    // We are consuming the parent muiFormControl context.
    // We don't want a child to consume it a second time.
    return {
      muiFormControl: null,
    };
  }

  componentDidMount() {
    if (!this.isControlled) {
      this.checkDirty();
    }
  }

  componentDidUpdate() {
    if (this.isControlled) {
      this.checkDirty();
    } // else performed in the onChange
  }

  handleFocus = event => {
    this.setState({ focused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    const { muiFormControl } = this.context;
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    const { muiFormControl } = this.context;
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  handleChange = event => {
    if (!this.isControlled) {
      this.setState({ dirty: true, value: event.target.value }, () => {
        this.checkDirty();
      });
    } else {
      this.setState({ dirty: true });
    }

    // Perform in the willUpdate
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  checkDirty = () => {
    const { muiFormControl } = this.context;
    // if dirty, ignore defaults
    if (
      isFilled(
        this.isControlled ? this.props : { ...this.props, value: this.state.value },
        !this.state.dirty,
      )
    ) {
      if (muiFormControl && muiFormControl.onFilled) {
        muiFormControl.onFilled();
      }
      if (this.props.onFilled) {
        this.props.onFilled();
      }
      return;
    }

    if (muiFormControl && muiFormControl.onEmpty) {
      muiFormControl.onEmpty();
    }
    if (this.props.onEmpty) {
      this.props.onEmpty();
    }
  };

  render() {
    const {
      autoComplete,
      autoFocus,
      classes,
      style: styleProp,
      defaultValue,
      disabled: disabledProp,
      disableUnderline,
      endAdornment,
      error: errorProp,
      fullWidth,
      inputComponent: InputComponent,
      inputProps: { style: inputPropsClassName, ...inputPropsProp } = {},
      margin: marginProp,
      name,
      onBlur,
      onChange,
      onEmpty,
      onFilled,
      onFocus,
      placeholder,
      readOnly,
      startAdornment,
      type,
      value,
      ...other
    } = this.props;

    const { muiFormControl } = this.context;
    const { disabled, error, margin, required } = formControlState(this.props, this.context);

    const className = styleNames(
      classes.root,
      {
        [classes.disabled]: disabled,
        [classes.error]: error,
        [classes.fullWidth]: fullWidth,
        [classes.focused]: this.state.focused,
        [classes.formControl]: muiFormControl,
      },
      styleProp,
    );

    const inputClassName = styleNames(
      classes.input,
      {
        [classes.disabled]: disabled,
        [classes.inputType]: type !== 'text',
        [classes.inputTypeSearch]: type === 'search',
        [classes.inputMarginDense]: margin === 'dense',
      },
      inputPropsClassName,
    );

    let inputProps = inputPropsProp;

    return (
      <View style={className} {...other}>
        {typeof startAdornment === 'string' ? <Text>{startAdornment}</Text> : startAdornment}
        <InputComponent
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor={this.state.focused ? undefined : 'rgba(0,0,0,0)'}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          style={inputClassName}
          disabled={disabled}
          name={name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          onChange={this.handleChange}
          defaultValue={defaultValue}
          value={value}
          {...inputProps}
        />
        <Underline
          style={styleNames(classes.underline, {
            [classes.underlineDisabled]: disabled,
            [classes.underlineError]: error,
            [classes.underlineFocused]: this.state.focused,
          })}
        />
        {typeof endAdornment === 'string' ? <Text>{endAdornment}</Text> : endAdornment}
      </View>
    );
  }
}

Input.propTypes = {
  ...TextInput.propTypes,
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the wrapper element.
   */
  className: PropTypes.string,
  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onEmpty: PropTypes.func,
  /**
   * @ignore
   */
  onFilled: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the input will be required.
   */
  required: PropTypes.bool,
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,
  /**
   * The input value, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

Input.muiName = 'Input';

Input.defaultProps = {
  inputComponent: TextInput,
  disableUnderline: false,
  fullWidth: false,
  multiline: false,
};

Input.contextTypes = {
  muiFormControl: PropTypes.object,
};

Input.childContextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiInput' })(Input);
