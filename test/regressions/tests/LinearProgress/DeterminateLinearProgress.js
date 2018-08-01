// @flow

import React from 'react';
import { View, Text } from 'react-native';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      variant="determinate"
      value={60}
      style={{
        width: 150,
      }}
    />
  );
}
