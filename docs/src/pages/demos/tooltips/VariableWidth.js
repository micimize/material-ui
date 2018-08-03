import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;

function VariableWidth({ classes }) {
  return (
    <View>
      <Tooltip title={longText}>
        <Button style={classes.button}>Default Width [300px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button style={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button style={classes.button}>No wrapping</Button>
      </Tooltip>
    </View>
  );
}

VariableWidth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VariableWidth);
