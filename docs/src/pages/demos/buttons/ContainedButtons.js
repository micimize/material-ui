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

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <View>
      <Button variant="contained" style={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" style={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" style={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled style={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" style={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        style={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" style={classes.button}>
          Upload
        </Button>
      </label>
    </View>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
