import React from 'react';
import { View, Text } from 'react-native';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch value={this.state.checkedA} onValueChange={this.handleChange('checkedA')} />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Switch
              value={this.state.checkedB}
              onValueChange={this.handleChange('checkedB')}
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Switch />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel disabled control={<Switch defaultChecked />} label="Disabled" />
      </FormGroup>
    );
  }
}

export default SwitchLabels;
