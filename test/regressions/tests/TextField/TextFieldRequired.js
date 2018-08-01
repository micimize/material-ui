// @flow

import React from 'react';
import { View, Text } from 'react-native';
import TextField from '@material-ui/core/TextField';

export default function TextFieldRequired() {
  return (
    <div>
      <TextField required label="Foo" />
      <TextField required label="Foo" value="Hello world" />
    </div>
  );
}
