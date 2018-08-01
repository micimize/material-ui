// @flow

import React from 'react';
import { View, Text } from 'react-native';
import Button from '@material-ui/core/Button';

export default function MaterialV1Buttons() {
  return (
    <View>
      <Button variant="flat">Text</Button>
      <Button variant="flat" color="primary">
        Text
      </Button>
      <Button variant="flat" color="secondary">
        Text
      </Button>
      <Button variant="raised">Raised</Button>
      <Button variant="raised" color="primary">
        Raised
      </Button>
      <Button variant="raised" color="secondary">
        Raised
      </Button>
    </View>
  );
}
