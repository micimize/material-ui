import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  row: {
    flexDirection: 'row',
  },
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
    <View style={classes.row}>
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
      <TextInput
        accept="image/*"
        style={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <Text htmlFor="flat-button-file">
        <Button style={classes.button}>Upload</Button>
      </Text>
    </View>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
