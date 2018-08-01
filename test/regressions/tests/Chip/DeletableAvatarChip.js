// @flow

import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default function DeletableAvatarChip() {
  return <Chip avatar={<Avatar>MB</Avatar>} label="SvgIcon Chip" onDelete={() => {}} />;
}
