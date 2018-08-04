import React from 'react';
import { View, Text } from 'react-native';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class DirectionSnackbar extends React.Component {
  state = {
    open: false,
    transition: null,
  };

  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <View>
        <Button onClick={this.handleClick(TransitionLeft)}>Right</Button>
        <Button onClick={this.handleClick(TransitionUp)}>Up</Button>
        <Button onClick={this.handleClick(TransitionRight)}>Left</Button>
        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<Text id="message-id">I love snacks</Text>}
        />
      </View>
    );
  }
}

export default DirectionSnackbar;
