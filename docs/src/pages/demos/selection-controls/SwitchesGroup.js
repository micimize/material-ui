import React from 'react';
import { View, Text } from 'react-native';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

class SwitchesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormControl>
        <FormLabel>Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Switch value={this.state.gilad} onValueChange={this.handleChange('gilad')} />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Switch value={this.state.jason} onValueChange={this.handleChange('jason')} />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch value={this.state.antoine} onValueChange={this.handleChange('antoine')} />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
