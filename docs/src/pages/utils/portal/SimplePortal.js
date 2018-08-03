import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Portal from '@material-ui/core/Portal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  alert: {
    padding: theme.spacing.unit,
    margin: `${theme.spacing.unit}px 0`,
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
});

class SimplePortal extends React.Component {
  container = null;

  state = {
    show: false,
  };

  handleClick = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { classes } = this.props;
    const { show } = this.state;
    return (
      <View>
        <Button onClick={this.handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
        <View style={classes.alert}>
          <Typography>It looks like I will render here.</Typography>
          {show ? (
            <Portal container={this.container}>
              <Typography>But I actually render here!</Typography>
            </Portal>
          ) : null}
        </View>
        <View
          style={classes.alert}
          ref={ref => {
            this.container = ref;
          }}
        />
      </View>
    );
  }
}

SimplePortal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePortal);
