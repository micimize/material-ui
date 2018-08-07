import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  row: {
    flexDirection: 'row',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Button variant="contained" color="secondary" style={classes.button}>
        <Text>Delete</Text>
        <DeleteIcon style={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" style={classes.button}>
        <Text>Send</Text>
        <Icon style={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="default" style={classes.button}>
        <Text>Upload</Text>
        <CloudUploadIcon style={classes.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" style={classes.button}>
        <KeyboardVoiceICon style={classes.leftIcon} />
        <Text>Talk</Text>
      </Button>
      <Button variant="contained" size="small" style={classes.button}>
        <SaveIcon style={styleNames(classes.leftIcon, classes.iconSmall)} />
        <Text>Save</Text>
      </Button>
    </View>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
