import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    borderWidth: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
  },
  disabled: {
    background: 'rgba(0, 0, 0, 0.12)',
    color: 'white',
    boxShadow: 'none',
  },
};

function ClassesState(props) {
  const { classes } = props;
  return (
    <Button
      disabled
      classes={{
        root: classes.root, // class name, e.g. `classes-state-root-x`
        disabled: classes.disabled, // class name, e.g. `classes-state-disabled-x`
      }}
    >
      classes state
    </Button>
  );
}

ClassesState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassesState);
