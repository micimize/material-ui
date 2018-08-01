import React from 'react';
import { View, Text } from 'react-native';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

class FadeSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <View>
        <Button onClick={this.handleClick}>Open with Fade Transition</Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </View>
    );
  }
}

export default FadeSnackbar;
