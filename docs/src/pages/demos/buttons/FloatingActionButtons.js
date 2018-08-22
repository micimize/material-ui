import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    svg: {

    }
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Button variant="fab" color="primary" accessibilityLabel="Add" style={classes.button}>
        <AddIcon color="onPrimary" />
      </Button>
      <Button variant="fab" color="secondary" accessibilityLabel="Edit" style={classes.button}>
        <EditIcon color="onSecondary" />
      </Button>
      <Button variant="extendedFab" accessibilityLabel="Delete" style={classes.button}>
        <NavigationIcon style={classes.extendedIcon} />
        <Typography variant="button">EXTENDED</Typography>
      </Button>
      <Button variant="fab" disabled accessibilityLabel="Delete" style={classes.button}>
        <DeleteIcon color="disabled" />
      </Button>
    </View>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
