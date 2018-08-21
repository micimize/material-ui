import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

// injectFonts({ MaterialIcons });

const styles = theme => ({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function Icons(props) {
  const { classes } = props;

  return (
    <View style={classes.root}>
      <Icon style={classes.icon}>add_circle</Icon>
      <Icon style={classes.icon} color="primary">
        add_circle
      </Icon>
      <Icon style={classes.icon} color="secondary">
        add_circle
      </Icon>
      <Icon style={classes.icon} color="action">
        add_circle
      </Icon>
      <Icon style={classes.iconHover} color="error" style={{ fontSize: 30 }}>
        add_circle
      </Icon>
      <Icon style={classes.icon} color="disabled" style={{ fontSize: 36 }}>
        add_circle
      </Icon>
    </View>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Icons);
