import React from 'react';
import { View, Text,Picker } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <View style={classes.root}>
        <FormControl style={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <Picker.Item value="" />
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </Select>
        </FormControl>
        <FormControl style={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Age</InputLabel>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-helper" />}
          >
            <Picker.Item value="" />
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </NativeSelect>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl}>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            style={classes.selectEmpty}
          >
            <Picker.Item value="">None</Picker.Item>
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </NativeSelect>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Age
          </InputLabel>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <Picker.Item value="">None</Picker.Item>
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </NativeSelect>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} disabled>
          <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
          <NativeSelect
            value={this.state.name}
            onChange={this.handleChange('name')}
            input={<Input name="name" id="name-native-disabled" />}
          >
            <Picker.Item value="" />
            <optgroup label="Author">
              <Picker.Item value="hai">Hai</Picker.Item>
            </optgroup>
            <optgroup label="Contributors">
              <Picker.Item value="olivier">Olivier</Picker.Item>
              <Picker.Item value="kevin">Kevin</Picker.Item>
            </optgroup>
          </NativeSelect>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl} error>
          <InputLabel htmlFor="name-native-error">Name</InputLabel>
          <NativeSelect
            value={this.state.name}
            onChange={this.handleChange('name')}
            name="name"
            input={<Input id="name-native-error" />}
          >
            <Picker.Item value="" />
            <optgroup label="Author">
              <Picker.Item value="hai">Hai</Picker.Item>
            </optgroup>
            <optgroup label="Contributors">
              <Picker.Item value="olivier">Olivier</Picker.Item>
              <Picker.Item value="kevin">Kevin</Picker.Item>
            </optgroup>
          </NativeSelect>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
          <NativeSelect defaultValue={30} input={<Input name="name" id="uncontrolled-native" />}>
            <Picker.Item value="" />
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </NativeSelect>
          <FormHelperText>Uncontrolled</FormHelperText>
        </FormControl>
        <FormControl style={classes.formControl}>
          <NativeSelect
            style={classes.selectEmpty}
            value={this.state.age}
            name="age"
            onChange={this.handleChange('age')}
          >
            <Picker.Item value="" disabled>
              Placeholder
            </Picker.Item>
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </NativeSelect>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
        <FormControl required style={classes.formControl}>
          <InputLabel htmlFor="age-native-required">Age</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}
          >
            <Picker.Item value="" />
            <Picker.Item value={10}>Ten</Picker.Item>
            <Picker.Item value={20}>Twenty</Picker.Item>
            <Picker.Item value={30}>Thirty</Picker.Item>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </View>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
