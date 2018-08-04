import React from 'react';
import { View, Text } from 'react-native';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function SelectOverflow() {
  return (
    <Select value={10} style={{ maxWidth: 100 }}>
      <MenuItem value="">
        <Text>None</Text>
      </MenuItem>
      <MenuItem value={10}>Tennnnnnn</MenuItem>
    </Select>
  );
}

export default SelectOverflow;
