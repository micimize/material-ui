// @flow

import React from 'react';
import { View, Text } from 'react-native';
import Paper from '@material-ui/core/Paper';

const style = {
  margin: 15,
  padding: 30,
};

export default function SimplePaper() {
  return (
    <View>
      <Paper style={style} />
      <Paper style={style} square />
      <Paper style={style} elevation={6} />
    </View>
  );
}
