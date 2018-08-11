import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    flexDirection: 'row',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class CheckboxesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: false,
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const { gilad, jason, antoine } = this.state;
    const error = Object.values(this.state).filter(v => v).length !== 2;

    return (
      <View style={classes.root}>
        <FormControl style={classes.formControl}>
          <FormLabel>Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value={gilad} onValueChange={this.handleChange('gilad')} />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox value={jason} onValueChange={this.handleChange('jason')} />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={<Checkbox value={antoine} onValueChange={this.handleChange('antoine')} />}
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <FormControl required error={error} style={classes.formControl}>
          <FormLabel>Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value={gilad} onValueChange={this.handleChange('gilad')} />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox value={jason} onValueChange={this.handleChange('jason')} />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={<Checkbox value={antoine} onValueChange={this.handleChange('antoine')} />}
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </View>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
