import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = {
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

function IconAvatars(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Avatar style={classes.avatar}>
        <FolderIcon />
      </Avatar>
      <Avatar style={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar style={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
    </View>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
