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

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Button variant="contained" style={classes.button}>
        DEFAULT
      </Button>
      <Button variant="contained" color="primary" style={classes.button}>
        PRIMARY
      </Button>
      <Button variant="contained" color="secondary" style={classes.button}>
        SECONDARY
      </Button>
      <Button variant="contained" color="secondary" disabled style={classes.button}>
        DISABLED
      </Button>
      <Button variant="contained" href="#contained-buttons" style={classes.button}>
        LINK
      </Button>
      <TextInput
        accept="image/*"
        style={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <Text htmlFor="contained-button-file">
        <Button variant="contained" style={classes.button}>
          UPLOAD
        </Button>
      </Text>
    </View>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
