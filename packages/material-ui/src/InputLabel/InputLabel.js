// @inheritedComponent FormLabel

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';
import FormLabel from '../FormLabel';
import { createComponent } from '../styles/extended-styles/animated';

const Label = createComponent(FormLabel);

// 57, 16, 
// 40
// 24
// 6 

export const styles = theme => {
  // TODO this is probably suboptimal, unfortunately react-native doesn't have transform-origin,
  // fontSize can't use native drivers,
  // and matrix transforms are deprecated
  const width = 400
  return {
    /* Styles applied to the root element. */
    root: {
      // transformOrigin: 'top left',
      lineHeight: 19,
      fontSize: 16,
    },
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'flex-start',
      left: 0,
      top: 0,
      width,
      // slight alteration to spec spacing to match visual spec result
      transform: [{ translateY: 24 }, { scale: 1 }],
    },
    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: [{ translateY: 21 }, { scale: 1 }],
    },
    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: [{ translateX: -width / 2* 0.25 }, { translateY: 1.5 }, { scale: 0.75 }],
      // transformOrigin: 'top left',
    },
    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['translateX', 'translateY', 'scale'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut,
      }),
    },
  }
};

function InputLabel(props, context) {
  const {
    children,
    classes,
    style: styleProp,
    disableAnimation,
    FormLabelClasses,
    margin: marginProp,
    shrink: shrinkProp,
    ...other
  } = props;

  const { muiFormControl } = context;
  let shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  let margin = marginProp;
  if (typeof margin === 'undefined' && muiFormControl) {
    margin = muiFormControl.margin;
  }

  const className = [
    classes.root,
    muiFormControl && classes.formControl,
    !disableAnimation && classes.animated,
    shrink && classes.shrink,
    margin === 'dense' && classes.marginDense,
    styleProp,
  ];

  return (
    <Label useNativeDriver style={className} classes={FormLabelClasses} {...other}>
      {children}
    </Label>
  );
}

InputLabel.propTypes = {
  /**
   * The contents of the `InputLabel`.
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
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: PropTypes.bool,
  /**
   * If `true`, apply disabled class.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: PropTypes.bool,
  /**
   * `classes` property applied to the `FormLabel` element.
   */
  FormLabelClasses: PropTypes.object,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense']),
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes.bool,
};

InputLabel.defaultProps = {
  disableAnimation: false,
};

InputLabel.contextTypes = {
  muiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'MuiInputLabel' })(InputLabel);
