import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    html: {

      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      // Do the opposite of the docs in order to help catching issues.
    },
    '*, *::before, *::after': {
      // Disable transitions to avoid flaky screenshots
      transition: 'none !important',
      animation: 'none !important',
    },
    body: {
      margin: 0,
      overflowX: 'hidden',
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
  },
});

function TestViewer(props) {
  const { children, classes } = props;

  return <View style={classes.root}>{children}</View>;
}

TestViewer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestViewer);
