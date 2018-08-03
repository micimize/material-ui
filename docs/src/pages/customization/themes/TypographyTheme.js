import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'flex',
  },
};

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subheading: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function TypographyTheme(props) {
  const { classes } = props;

  const children = (
    <View>
      <Typography>body1</Typography>
      <Typography variant="subheading">subheading</Typography>
      <Button>Button</Button>
    </View>
  );

  return (
    <View style={classes.root}>
      {children}
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </View>
  );
}

TypographyTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyTheme);
