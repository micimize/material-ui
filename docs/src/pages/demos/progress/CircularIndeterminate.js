import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <View>
      <CircularProgress style={classes.progress} />
      <CircularProgress style={classes.progress} size={50} />
      <CircularProgress style={classes.progress} color="secondary" />
      <CircularProgress style={classes.progress} style={{ color: purple[500] }} thickness={7} />
    </View>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
