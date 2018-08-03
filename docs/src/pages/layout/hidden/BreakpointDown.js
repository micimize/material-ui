import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
});

function BreakpointDown(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Typography variant="subheading">Current width: {props.width}</Typography>
      <View style={classes.container}>
        <Hidden xsDown>
          <Paper style={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper style={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper style={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper style={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper style={classes.paper}>xlDown</Paper>
        </Hidden>
      </View>
    </View>
  );
}

BreakpointDown.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(BreakpointDown);
