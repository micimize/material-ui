// @inheritedComponent MenuItem

import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import { withStyles } from '../styles';
import MenuItem from '../MenuItem';
import { capitalize } from '../utils/helpers';

const styles = theme => {
  const transition = theme.transitions.create('backgroundColor', {
    duration: theme.transitions.duration.shortest,
  });

  return {
    root: {
      padding: 7.5,
      borderRadius: 3,
      backgroundColor: 'transparent',
      transition,
    },
    text: {
      ...theme.typography.body2,
    },
    colorPrimary: {},
    colorSecondary: {},
    textPrimary: {
      color: theme.palette.primary.contrastText,
    },
    textSecondary: {
      color: theme.palette.secondary.contrastText,
    },
    select: {},
    selectedPrimary: {
      backgroundColor: 'pink',
      backgroundColor: theme.palette.primary.light,
    },
    selectedSecondary: {
      backgroundColor: theme.palette.secondary.light,
    },
  };
};

function BackdropMenuItem(props) {
  const { classes: classesProp, color, ...other } = props;
  const classes = {
    root: [classesProp.root, classesProp[`color${capitalize(color)}`]],
    text: styleNames(classesProp.text, classesProp[`text${capitalize(color)}`]),
    selected: [classesProp.selected, classesProp[`selected${capitalize(color)}`]],
  };
  return <MenuItem classes={classes} {...other} />;
}

BackdropMenuItem.propTypes = {
  ...MenuItem.propTypes,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,
};

BackdropMenuItem.defaultProps = {
  color: 'primary',
  disableRipple: true,
  selected: false,
};

export default withStyles(styles, { name: 'MuiBackdropMenuItem' })(BackdropMenuItem);
