import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2,
  },
  affected: {
    textAlign: 'right',
  },
  unaffected: {
    flip: false,
    textAlign: 'right',
  },
});

function RtlOptOut(props) {
  const { classes } = props;

  return (
    <View className={classes.root}>
      <View className={classes.affected}>Affected</View>
      <View className={classes.unaffected}>Unaffected</View>
    </View>
  );
}

RtlOptOut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RtlOptOut);
