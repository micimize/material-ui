import React from 'react';
import { View, Text } from 'react-native';
// TODO might be unnecessary
import { TextInput } from '../styles/extended-styles/focusable';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '../styles/withStyles';

const ROW_HEIGHT = 19;

export const styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
  },
  sizingText: {
    opacity: 0,
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    padding: 0,
    lineHeight: ROW_HEIGHT,
    outline: 'none',
    background: 'transparent',
  },
  textareaPosition: {
    boxSizing: 'border-box',
    position: 'absolute',
  },
};

/**
 * @ignore - internal component.
 */
class Textarea extends React.Component {
  isControlled = this.props.value != null;
  value = null;

  constructor(props) {
    super(props);

    // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.
    this.value = props.value || props.defaultValue || '';
  }

  state = {
    height: null,
  };

  handleChange = event => {
    this.value = event.target.value;

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      classes,
      style,
      defaultValue,
      onChange,
      rows,
      rowsMax,
      textareaRef,
      value,
      ...other
    } = this.props;

    return (
      <View
        style={styleNames(classes.root, {
          minHeight: rows * ROW_HEIGHT,
          maxHeight: rowsMax ? rowsMax * ROW_HEIGHT : undefined,
        })}
      >
        <Text style={styleNames(classes.textarea, style, classes.sizingText)}>
          {this.isControlled ? value : this.value}.
        </Text>
        <TextInput
          multiline
          rows={rows}
          style={styleNames(classes.textarea, style, classes.textareaPosition)}
          defaultValue={defaultValue}
          value={this.isControlled ? value : this.value}
          onChange={this.handleChange}
          ref={this.handleRefInput}
          {...other}
        />
      </View>
    );
  }
}

Textarea.propTypes = {
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
   * @ignore
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Textarea.defaultProps = {
  rows: 1,
  rowsMax: 3,
};

export default withStyles(styles)(Textarea);
