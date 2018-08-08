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
      <IconButton style={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton style={classes.button} aria-label="Delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" style={classes.button} aria-label="Add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" style={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" style={classes.button}>
        <PhotoCamera />
      </IconButton>
      {/* TODO idk if these input examples makes sense in native
        <TextInput accept="image/*" style={classes.input} id="icon-button-file" type="file" />
        <Text htmlFor="icon-button-file">
          <IconButton color="primary" style={classes.button} component="span">
            <PhotoCamera />
          </IconButton>
        </Text>
      */}
    </View>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
