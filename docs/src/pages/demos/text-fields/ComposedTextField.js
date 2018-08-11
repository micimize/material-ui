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
  },
  formControl: {
    margin: theme.spacing.unit,
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
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <FormControl style={classes.formControl} aria-describedby="name-helper-text">
          <InputLabel htmlFor="name-helper">Name</InputLabel>
          <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} disabled>
          <InputLabel htmlFor="name-disabled">Name</InputLabel>
          <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} error aria-describedby="name-error-text">
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
          <FormHelperText id="name-error-text">Error</FormHelperText>
        </FormControl>
      </View>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
