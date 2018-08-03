import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: 400,
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
});

function StressGrid(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Grid container spacing={24} direction="column">
        <Grid container item spacing={8}>
          <Grid item xs={3}>
            <Paper style={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper style={classes.paper}>xs=9</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={8} direction="row-reverse">
          <Grid item xs={3}>
            <Paper style={classes.paper}>first</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={classes.paper}>last</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={8} justify="space-between">
          <Grid item xs={3}>
            <Paper style={classes.paper}>space</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={classes.paper}>between</Paper>
          </Grid>
        </Grid>
        <Grid container item spacing={8} alignItems="stretch" direction="column-reverse">
          <Grid item>
            <Paper style={classes.paper}>reverse</Paper>
          </Grid>
          <Grid item>
            <Paper style={classes.paper}>column</Paper>
          </Grid>
        </Grid>
      </Grid>
    </View>
  );
}

StressGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StressGrid);
