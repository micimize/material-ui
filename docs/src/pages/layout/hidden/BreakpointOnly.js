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
    flexDirection: 'row',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
});

function BreakpointOnly(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Typography variant="subheading">Current width: {props.width}</Typography>
      <View style={classes.container}>
        <Hidden only="lg">
          <Paper style={classes.paper}>Hidden on lg</Paper>
        </Hidden>
        <Hidden only="sm">
          <Paper style={classes.paper}>Hidden on sm</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
          <Paper style={classes.paper}>Hidden on sm and lg</Paper>
        </Hidden>
      </View>
    </View>
  );
}

BreakpointOnly.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(BreakpointOnly);
