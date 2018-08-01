// @flow

import React from 'react';
import { View, Text } from 'react-native';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SimpleListItem() {
  return (
    <View style={{ backgroundColor: '#fff', width: 300 }}>
      <ListItem>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
    </View>
  );
}
