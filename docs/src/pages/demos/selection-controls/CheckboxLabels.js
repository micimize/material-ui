import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  icon: {
    svg: {
      fill: green[600],
    }
  },
  checked: {
    svg: {
      fill: green[500],
    },
  },
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    width: 20,
    height: 20,
  },
};

class CheckboxLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
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
            <Checkbox
              color="secondary"
              value={this.state.checkedA}
              onValueChange={this.handleChange('checkedA')}
            />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={this.state.checkedB}
              onValueChange={this.handleChange('checkedB')}
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Checkbox />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        <FormControlLabel disabled control={<Checkbox checked />} label="Disabled" />
        <FormControlLabel
          control={
            <Checkbox
              value={this.state.checkedF}
              onValueChange={this.handleChange('checkedF')}
              indeterminate
            />
          }
          label="Indeterminate"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={this.state.checkedG}
              onValueChange={this.handleChange('checkedG')}
              classes={{
                icon: classes.icon,
                checked: classes.checked,
              }}
            />
          }
          label="Custom color"
        />
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked />}
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              style={classes.size}
              icon={<CheckBoxOutlineBlankIcon style={classes.sizeIcon} />}
              checkedIcon={<CheckBoxIcon style={classes.sizeIcon} />}
            />
          }
          label="Custom size"
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);
