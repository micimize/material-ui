import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <View style={classes.row}>
      <Avatar alt="Remy Sharp" src="../static/images/remy.jpg" style={classes.avatar} />
      <Avatar
        alt="Adelle Charles"
        src="../static/images/uxceo-128.jpg"
        style={styleNames(classes.avatar, classes.bigAvatar)}
      />
    </View>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
