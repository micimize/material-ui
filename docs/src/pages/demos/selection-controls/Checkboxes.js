import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from '@material-ui/core/Checkbox';

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Checkbox
          checked={this.state.checkedA}
          onValueChange={this.handleChange('checkedA')}
          value={this.state.checkedA}
        />
        <Checkbox
          checked={this.state.checkedB}
          onValueChange={this.handleChange('checkedB')}
          value={this.state.checkedB}
          color="primary"
        />
        <Checkbox value={false} />
        <Checkbox disabled value={false} />
        <Checkbox disabled value={true} />
        <Checkbox
          checked={this.state.checkedF}
          onValueChange={this.handleChange('checkedF')}
          value={this.state.checkedF}
          indeterminate
        />
        <Checkbox defaultChecked color="default" value="checkedG" />
      </View>
    );
  }
}

export default Checkboxes;
