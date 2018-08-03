import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
};

class VerticalSlider extends React.Component {
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
      <View style={classes.root}>
        <Slider value={value} onChange={this.handleChange} vertical />
        <Slider value={value} onChange={this.handleChange} vertical reverse />
      </View>
    );
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalSlider);
