// @flow

import React from 'react';
import { View, Text } from 'react-native';
import TextField from '@material-ui/core/TextField';

export default function TextFieldError() {
  return (
    <View>
      <TextField error label="Foo" />
      <TextField error label="Foo" value="Hello world" />
    </View>
  );
}
