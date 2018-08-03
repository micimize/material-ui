// @flow weak

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: 400,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
};

function AutoGrid(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper style={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </View>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
