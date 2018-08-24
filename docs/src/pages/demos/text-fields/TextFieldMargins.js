import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const TextFieldMargins = props => {
  const { classes } = props;

  return (
    <View style={classes.container}>
      <TextField
        label="None"
        defaultValue="Default Value"
        style={classes.textField}
        helperText="Some important text"
      />
      <TextField
        label="Dense"
        defaultValue="Default Value"
        style={classes.textField}
        helperText="Some important text"
        margin="dense"
      />
      <TextField
        label="Normal"
        defaultValue="Default Value"
        style={classes.textField}
        helperText="Some important text"
        margin="normal"
      />
    </View>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins);
