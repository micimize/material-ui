import React from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <View style={classes.container} noValidate autoComplete="off">
        <TextField
          label="Name"
          style={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Uncontrolled"
          defaultValue="foo"
          style={classes.textField}
          margin="normal"
        />
        <TextField
          required
          label="Required"
          defaultValue="Hello World"
          style={classes.textField}
          margin="normal"
        />
        <TextField
          error
          label="Error"
          defaultValue="Hello World"
          style={classes.textField}
          margin="normal"
        />
        <TextField
          label="Password"
          style={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          label="Multiline"
          multiline
          rows={4}
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          style={classes.textField}
          margin="normal"
        />
        <TextField
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          style={classes.textField}
          margin="normal"
        />
        <TextField
          label="Helper text"
          defaultValue="Default Value"
          style={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
        <TextField
          label="With placeholder"
          placeholder="Placeholder"
          style={classes.textField}
          margin="normal"
        />
        <TextField
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          style={classes.textField}
          margin="normal"
        />
        <TextField
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          style={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          label="Search field"
          type="search"
          style={classes.textField}
          margin="normal"
        />
        {/*
        <TextField
          select
          label="Select"
          style={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              style: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <Picker.Item key={option.value} value={option.value}>
              <Text>{option.label}</Text>
            </Picker.Item>
          ))}
        </TextField>
        <TextField
          select
          label="Native select"
          style={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              style: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <Picker.Item key={option.value} value={option.value}>
              <Text>{option.label}</Text>
            </Picker.Item>
          ))}
        </TextField>
        */}
        <TextField
          label="Label"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
        />
      </View>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
