import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 2}px`,
    right: 0,
    left: 0,
    display: 'flex',
    backgroundColor: '#626980', // Tidelift color.
    position: 'relative',
    top: 56,
    [theme.breakpoints.up('sm')]: {
      top: 64 + 36 / 2,
      left: 'auto',
      position: 'absolute',
      borderBottomLeftRadius: 36 / 2,
      borderTopLeftRadius: 36 / 2,
    },
  },
  logo: {
    background: 'url(/static/images/tidelift.svg) no-repeat 50%',
    content: "''",
    width: 20,
    height: 20,
    margin: `0 ${theme.spacing.unit}px 0 0`,
  },
  label: {
    color: theme.palette.common.white,
  },
});

function Tidelift(props) {
  const { classes } = props;

  return (
    <Link
      style={classes.root}
      variant="button"
      href="https://tidelift.com/subscription/npm/material-ui?utm_source=material_ui&utm_medium=referral&utm_campaign=homepage"
      target="_blank"
      rel="noopener"
    >
      <Text style={classes.logo} />
      <Typography style={classes.label}>Get Professionally Supported Material-UI</Typography>
    </Link>
  );
}

Tidelift.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tidelift);
