import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// right now Grid spacing is controlled with React.Children.map, which is fragile
// requires direct nesting, no wrapping components
// thus we use a regular function here
function gridRow(props) {
  const { classes } = props;

  return (
    <Grid item xs={12} container spacing={24} classes={classes}>
      <Grid item xs={4}>
        <Paper style={classes.paper}>
          <Text>item</Text>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={classes.paper}>
          <Text>item</Text>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={classes.paper}>
          <Text>item</Text>
        </Paper>
      </Grid>
    </Grid>
  );
}

function NestedGrid(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Grid container direction="column" spacing={8}>
        {gridRow({ classes })}
        {gridRow({ classes })}
        {gridRow({ classes })}
      </Grid>
    </View>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
