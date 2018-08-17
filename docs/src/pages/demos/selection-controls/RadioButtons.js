import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  icon: {
    color: green[600],
    fill: green[600],
  },
  checked: {
    color: green[500],
    fill: green[500],
  },
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: 'a',
  };

  changeHandler = value => checked => {
    this.setState({ selectedValue: checked && value });
  };

  render() {
    const { classes } = this.props;

    return (
      <View style={{ flexDirection: 'row' }}>
        <Radio
          value={this.state.selectedValue === 'a'}
          onValueChange={this.changeHandler('a')}
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          value={this.state.selectedValue === 'b'}
          onValueChange={this.changeHandler('b')}
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          value={this.state.selectedValue === 'c'}
          onValueChange={this.changeHandler('c')}
          name="radio-button-demo"
          aria-label="C"
          classes={{
            icon: classes.icon,
            checked: classes.checked,
          }}
        />
        <Radio
          value={this.state.selectedValue === 'd'}
          onValueChange={this.changeHandler('d')}
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          value={this.state.selectedValue === 'e'}
          onValueChange={this.changeHandler('e')}
          color="default"
          name="radio-button-demo"
          aria-label="E"
          style={classes.size}
          icon={<RadioButtonUncheckedIcon style={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon style={classes.sizeIcon} />}
        />
      </View>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);
