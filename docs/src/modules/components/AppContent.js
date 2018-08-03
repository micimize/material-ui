import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import classNames from 'react-native-style-names';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up('md')]: {
    root: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
});

function AppContent(props) {
  const { style, classes, children } = props;

  return <View style={classNames(classes.root, className)}>{children}</View>;
}

AppContent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(AppContent);
