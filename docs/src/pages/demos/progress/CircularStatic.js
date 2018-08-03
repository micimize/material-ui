import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class CircularStatic extends React.Component {
  timer = null;

  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
  };

  render() {
    const { classes } = this.props;
    return (
      <View>
        <CircularProgress style={classes.progress} variant="static" value={5} />
        <CircularProgress style={classes.progress} variant="static" value={25} />
        <CircularProgress style={classes.progress} variant="static" value={50} />
        <CircularProgress style={classes.progress} variant="static" value={75} />
        <CircularProgress style={classes.progress} variant="static" value={100} />
        <CircularProgress
          style={classes.progress}
          variant="static"
          value={this.state.completed}
        />
      </View>
    );
  }
}

CircularStatic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularStatic);
