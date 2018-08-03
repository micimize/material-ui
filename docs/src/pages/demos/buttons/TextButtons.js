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

function TextButtons(props) {
  const { classes } = props;
  return (
    <View>
      <Button style={classes.button}>Default</Button>
      <Button color="primary" style={classes.button}>
        Primary
      </Button>
      <Button color="secondary" style={classes.button}>
        Secondary
      </Button>
      <Button disabled style={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" style={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        style={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <label htmlFor="flat-button-file">
        <Button component="span" style={classes.button}>
          Upload
        </Button>
      </label>
    </View>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
