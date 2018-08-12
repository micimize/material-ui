import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorBar: {},
  colorChecked: {
    backgroundColor: purple[500],
  },
  colorCheckedBar: {
    backgroundColor: purple[500],
  },
  iOSIcon: {
    width: 24,
    height: 24,
    backgroundColor: theme.palette.common.white,
    left: 0,
  },
  iOSCheckedBar: {
    opacity: 1,
    backgroundColor: '#52d869',
    borderColor: '#52d869',
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -12,
    borderWidth: 1,
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['backgroundColor', 'borderColor']),
  },
  iOSIconChecked: {
    left: 17,
    elevation: 1,
    backgroundColor: theme.palette.common.white,
  },
});

class CustomizedSwitches extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              value={this.state.checkedA}
              onValueChange={this.handleChange('checkedA')}
              classes={{
                iconChecked: classes.colorChecked,
                bar: classes.colorBar,
                checkedBar: classes.colorCheckedBar,
              }}
            />
          }
          label="Custom color"
        />
        <FormControlLabel
          control={
            <Switch
              classes={{
                icon: classes.iOSIcon,
                bar: classes.iOSBar,
                iconChecked: classes.iOSIconChecked,
                checkedBar: classes.iOSCheckedBar,
              }}
              disableRipple
              value={this.state.checkedB}
              onValueChange={this.handleChange('checkedB')}
            />
          }
          label="iOS style"
        />
      </FormGroup>
    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSwitches);
