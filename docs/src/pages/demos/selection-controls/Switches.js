import React from 'react';
import { View, Text } from 'react-native';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <View>
        <Switch value={this.state.checkedA} onValueChange={this.handleChange('checkedA')} />
        <Switch
          value={this.state.checkedB}
          onValueChange={this.handleChange('checkedB')}
          color="primary"
        />
        <Switch value={true} />
        <Switch disabled />
        <Switch disabled value={true} />
        <Switch defaultChecked color="default" />
      </View>
    );
  }
}

export default Switches;
