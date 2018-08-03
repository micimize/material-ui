import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
    <View>
      <Button variant="outlined" style={classes.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" style={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" style={classes.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled style={classes.button}>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons" style={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        style={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" style={classes.button}>
          Upload
        </Button>
      </label>
    </View>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
