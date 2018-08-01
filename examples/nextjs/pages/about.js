/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <View className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subheading" gutterBottom>
        about page
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <Text>Go to the main page</Text>
        </Link>
      </Typography>
      <Button variant="contained" color="primary">
        Do nothing button
      </Button>
    </View>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
