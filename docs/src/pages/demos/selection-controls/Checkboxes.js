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
        <Checkbox onValueChange={this.handleChange('checkedA')} value={this.state.checkedA} />
        <Checkbox
          onValueChange={this.handleChange('checkedB')}
          value={this.state.checkedB}
          color="primary"
        />
        <Checkbox />
        <Checkbox disabled value={false} />
        <Checkbox disabled value={true} />
        <Checkbox
          onValueChange={this.handleChange('checkedF')}
          value={this.state.checkedF}
          indeterminate
        />
        <Checkbox defaultChecked color="default" />
      </View>
    );
  }
}

export default Checkboxes;
