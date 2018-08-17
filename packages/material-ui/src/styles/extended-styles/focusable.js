// TODO implementing :focus might have been premature
import React from 'react';
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
          style={[style, this.state.focused && focusStyle ]}
          {...props}
        />
      );
    }
  }
  return FocusProvider;
}

const TextInput = focusable(RNTextInput);

export { TextInput };
