import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  row: {
    flexDirection: 'row',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    <View>
      <View style={classes.row}>
        <Button size="small" style={classes.button}>
          Small
        </Button>
        <Button size="medium" style={classes.button}>
          Medium
        </Button>
        <Button size="large" style={classes.button}>
          Large
        </Button>
      </View>
      <View style={classes.row}>
        <Button variant="outlined" size="small" color="primary" style={classes.button}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" style={classes.button}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" style={classes.button}>
          Large
        </Button>
      </View>
      <View style={classes.row}>
        <Button variant="contained" size="small" color="primary" style={classes.button}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" style={classes.button}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" style={classes.button}>
          Large
        </Button>
      </View>
      <View style={classes.row}>
        <Button variant="fab" mini color="secondary" aria-label="Add" style={classes.button}>
          <AddIcon color="onSecondary" />
        </Button>
        <Button variant="fab" color="secondary" aria-label="Add" style={classes.button}>
          <AddIcon color="onSecondary" />
        </Button>
      </View>
    </View>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
