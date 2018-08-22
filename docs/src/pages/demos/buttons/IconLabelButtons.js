import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    width: 20,
    height: 20,
  },
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Button variant="contained" color="secondary" style={classes.button}>
        <Typography variant="button" color="onSecondary">DELETE</Typography>
        <DeleteIcon color="onPrimary" style={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" style={classes.button}>
        <Typography variant="button" color="onPrimary">SEND</Typography>
        <SendIcon color="onPrimary" style={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="default" style={classes.button}>
        <Typography variant="button">UPLOAD</Typography>
        <CloudUploadIcon style={classes.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" style={classes.button}>
        <KeyboardVoiceICon color="disabled" style={classes.leftIcon} />
        <Typography variant="button" color="disabled">TALK</Typography>
      </Button>
      <Button variant="contained" size="small" style={classes.button}>
        <SaveIcon style={styleNames(classes.leftIcon, classes.iconSmall)} />
        <Typography variant="button" >SAVE</Typography>
      </Button>
    </View>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
