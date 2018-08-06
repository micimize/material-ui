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
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper style={classes.paper}>
            <Text>xs=12</Text>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={classes.paper}>
            <Text>xs=6</Text>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={classes.paper}>
            <Text>xs=6</Text>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>
            <Text>xs=3</Text>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>
            <Text>xs=3</Text>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>
            <Text>xs=3</Text>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={classes.paper}>
            <Text>xs=3</Text>
          </Paper>
        </Grid>
      </Grid>
    </View>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
