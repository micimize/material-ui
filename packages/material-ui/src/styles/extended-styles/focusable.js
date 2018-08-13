// TODO implementing :focus might have been premature
import React from 'react';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { get as getExtensions } from './extensions';

import { TextInput as RNTextInput } from 'react-native';

function focusable(Component) {
  class FocusProvider extends React.Component {
    state = { focused: false };

    focus = e => {
      this.setState({ focused: true });
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    };

    blur = e => {
      this.setState({ focused: false });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    };

    render() {
      const { onFocus, onBlur, style, ...props } = this.props;
      let focusStyle = getExtensions(style).focus;
      return (
        <Component
          onFocus={this.focus}
          onBlur={this.blur}
          style={styleNames(style, {
            [focusStyle]: this.state.focused,
          })}
          {...props}
        />
      );
    }
  }
  return FocusProvider;
}

const TextInput = focusable(RNTextInput);

export { TextInput };
