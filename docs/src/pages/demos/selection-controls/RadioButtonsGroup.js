import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    flexDirection: 'row',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <View style={classes.root}>
        <FormControl style={classes.formControl}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            style={classes.group}
            value={this.state.value}
            onValueChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={classes.formControl}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            style={classes.group}
            value={this.state.value}
            onValueChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
              labelPlacement="start"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Other"
              labelPlacement="start"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
              labelPlacement="start"
            />
          </RadioGroup>
          <FormHelperText>labelPlacement start</FormHelperText>
        </FormControl>
      </View>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
