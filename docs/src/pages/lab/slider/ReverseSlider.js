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

class ReverseSlider extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <View className={classes.root}>
        <Slider value={value} onChange={this.handleChange} />
        <Slider value={value} onChange={this.handleChange} reverse />
      </View>
    );
  }
}

ReverseSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReverseSlider);
