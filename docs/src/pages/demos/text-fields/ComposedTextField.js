import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 200,
  },
});

class ComposedTextField extends React.Component {
  state = {
    name: 'Composed TextField',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <View style={classes.container}>
        <FormControl style={classes.formControl}>
          <InputLabel>Name</InputLabel>
          <Input value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <FormControl style={classes.formControl}>
          <InputLabel>Name</InputLabel>
          <Input value={this.state.name} onChange={this.handleChange} />
          <FormHelperText >Some important helper text</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} disabled>
          <InputLabel>Name</InputLabel>
          <Input  value={this.state.name} onChange={this.handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} error >
          <InputLabel>Name</InputLabel>
          <Input value={this.state.name} onChange={this.handleChange} />
          <FormHelperText>Error</FormHelperText>
        </FormControl>
      </View>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
