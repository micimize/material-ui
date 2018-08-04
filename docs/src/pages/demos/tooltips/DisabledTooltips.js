import React from 'react';
import { View, Text } from 'react-native';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this">
      <Text>
        <Button disabled>A Disabled Button</Button>
      </Text>
    </Tooltip>
  );
}

export default DisabledTooltips;
