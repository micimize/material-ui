import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});

function TypographyTheme(props) {
  return <Text style={props.classes.root}>{"This Text's text looks like that of a button."}</Text>;
}

TypographyTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyTheme);
