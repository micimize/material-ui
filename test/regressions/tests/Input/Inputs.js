import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        <View className={classes.container}>
          <Input value="Hello world" className={classes.input} />
          <Input placeholder="Placeholder" className={classes.input} />
          <Input value="Disabled" className={classes.input} disabled />
          <Input error value="Error" className={classes.input} />
          <Input
            value="Focused"
            inputRef={node => {
              this.focusInput = node;
            }}
            className={classes.input}
          />
        </View>
        <Input value="Large input" className={classNames(classes.input, classes.large)} />
      </View>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
