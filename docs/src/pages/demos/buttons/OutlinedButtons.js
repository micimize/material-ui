import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Button variant="outlined" style={classes.button}>
        DEFAULT
      </Button>
      <Button variant="outlined" color="primary" style={classes.button}>
        PRIMARY
      </Button>
      <Button variant="outlined" color="secondary" style={classes.button}>
        SECONDARY
      </Button>
      <Button variant="outlined" disabled style={classes.button}>
        DISABLED
      </Button>
    </View>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
