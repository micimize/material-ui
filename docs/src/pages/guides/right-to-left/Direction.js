import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Direction() {
  return (
    <MuiThemeProvider theme={theme}>
      <View dir="rtl">
        <TextField label="Name" />
        <TextInput type="text" placeholder="Name" />
      </View>
    </MuiThemeProvider>
  );
}

export default Direction;
