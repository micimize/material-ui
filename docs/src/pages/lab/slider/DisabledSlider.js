import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

function DisabledSlider(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Slider value={0} disabled />
      <Slider value={50} disabled />
      <Slider value={100} disabled />
    </View>
  );
}

DisabledSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisabledSlider);
