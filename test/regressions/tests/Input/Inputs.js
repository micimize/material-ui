import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
  },
  input: {
    margin: 10,
  },
  large: {
    width: 300,
  },
};

class Inputs extends React.Component {
  focusInput = null;

  componentDidMount() {
    this.focusInput.focus();
  }

  render() {
    const { classes } = this.props;

    return (
      <View>
        <View style={classes.container}>
          <Input value="Hello world" style={classes.input} />
          <Input placeholder="Placeholder" style={classes.input} />
          <Input value="Disabled" style={classes.input} disabled />
          <Input error value="Error" style={classes.input} />
          <Input
            value="Focused"
            inputRef={node => {
              this.focusInput = node;
            }}
            style={classes.input}
          />
        </View>
        <Input value="Large input" style={styleNames(classes.input, classes.large)} />
      </View>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
