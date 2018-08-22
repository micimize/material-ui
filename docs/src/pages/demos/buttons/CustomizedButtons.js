import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  purpleRoot: {
    backgroundColor: purple[500],
  },
  purpleText: {
    color: theme.palette.getContrastText(purple[500]),
  },
  bootstrapRoot: {
    elevation: 0,
    padding: '6px 12px',
    border: '1px',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
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
  },
  bootstrapActive: {
    elevation: 0,
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <View style={classes.container}>
      <Button
        variant="contained"
        color="primary"
        classes={{
          containedPrimary: styleNames(classes.margin, classes.purpleRoot),
          text: classes.purpleText,
        }}
      >
        CUSTOM CSS
      </Button>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" style={classes.margin}>
          MUITHEMEPROVIDER
        </Button>
      </MuiThemeProvider>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        classes={{
          containedPrimary: styleNames(classes.margin, classes.bootstrapRoot),
          active: classes.bootstrapActive
        }}
      >
        Bootstrap
      </Button>
    </View>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
