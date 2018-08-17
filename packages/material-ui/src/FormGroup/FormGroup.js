import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import withStyles from '../styles/withStyles';

export const styles = {
  /* Styles applied to the root element. */
  root: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row',
  },
};

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */
function FormGroup(props) {
  const { classes, style, children, row, ...other } = props;

  return (
    <View
      style={styleNames(
        classes.root,
        {
          [classes.row]: row,
        },
        style,
      )}
      {...other}
    >
      {children}
    </View>
  );
}

FormGroup.propTypes = {
  /**
   * The content of the component.
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
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool,
};

FormGroup.defaultProps = {
  row: false,
};

export default withStyles(styles, { name: 'MuiFormGroup' })(FormGroup);
