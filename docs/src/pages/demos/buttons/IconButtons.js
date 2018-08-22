import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const styles = theme => ({
  row: {
    flexDirection: 'row',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <IconButton style={classes.button} accessibilityLabel="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton style={classes.button} accessibilityLabel="Delete" disabled color="primary">
        <DeleteIcon color="disabled"/>
      </IconButton>
      <IconButton color="secondary" style={classes.button} accessibilityLabel="Add to shopping cart">
        <AddShoppingCartIcon color="secondary" />
      </IconButton>
      {/*
      <IconButton color="primary" style={classes.button} accessibilityLabel="Add an alarm">
        <Icon color="secondary" >alarm</Icon>
      </IconButton>
      */}
      <IconButton color="primary" style={classes.button}>
        <PhotoCamera color="primary" />
      </IconButton>
    </View>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
