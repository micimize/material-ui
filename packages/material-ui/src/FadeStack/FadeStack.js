import React from 'react';
import { View as RNView } from 'react-native';
import withStyles from '@material-ui/core/styles/withStyles';
import styleNames from '@material-ui/core/styles/react-native-style-names';

export const styles = {
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1,
  },
};

function FadeStack({ classes, style, ...props }) {
  return <RNView style={styleNames(classes.root, style)} {...props} />;
}

export default withStyles(styles, { name: 'MuiFadeStack' })(FadeStack);