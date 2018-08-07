import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <View>
      <Button variant="fab" color="primary" aria-label="Add" style={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fab" color="secondary" aria-label="Edit" style={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="extendedFab" aria-label="Delete" style={classes.button}>
        <NavigationIcon style={classes.extendedIcon} />
        <Text>Extended</Text>
      </Button>
      <Button variant="fab" disabled aria-label="Delete" style={classes.button}>
        <DeleteIcon />
      </Button>
    </View>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
