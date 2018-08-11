import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <View style={classes.container}>
      <Input
        defaultValue="Hello world"
        style={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Placeholder"
        style={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        value="Disabled"
        style={classes.input}
        disabled
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        defaultValue="Error"
        style={classes.input}
        error
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </View>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
