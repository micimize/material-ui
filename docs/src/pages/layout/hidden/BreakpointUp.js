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

function BreakpointUp(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Typography variant="subheading">Current width: {props.width}</Typography>
      <View style={classes.container}>
        <Hidden xsUp>
          <Paper style={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper style={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper style={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper style={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper style={classes.paper}>xlUp</Paper>
        </Hidden>
      </View>
    </View>
  );
}

BreakpointUp.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(BreakpointUp);
