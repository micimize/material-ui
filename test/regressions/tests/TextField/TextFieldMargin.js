// @flow

import React from 'react';
import { View, Text } from 'react-native';
import TextField from '@material-ui/core/TextField';

export default function TextFieldMargin() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TextField label="Dense" defaultValue="Default Value" margin="dense" />
      <TextField style={{ position: 'absolute ' }} label="Dense" margin="dense" />
    </View>
  );
}
