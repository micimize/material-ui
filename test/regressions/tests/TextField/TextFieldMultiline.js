// @flow

import React from 'react';
import { View, Text } from 'react-native';
import TextField from '@material-ui/core/TextField';

export default function TextFieldMultiline() {
  return <TextField label="Foo" multiline rows={4} value="Default text" />;
}
