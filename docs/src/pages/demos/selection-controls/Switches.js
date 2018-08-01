import React from 'react';
import { View, Text } from 'react-native';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <View>
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        />
        <Switch
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
        <Switch value="checkedC" />
        <Switch disabled value="checkedD" />
        <Switch disabled checked value="checkedE" />
        <Switch defaultChecked value="checkedF" color="default" />
      </View>
    );
  }
}

export default Switches;
