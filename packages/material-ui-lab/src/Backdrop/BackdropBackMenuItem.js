// @inheritedComponent MenuItem

import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { capitalize } from '@material-ui/core/utils/helpers';

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
      backgroundColor: theme.palette.primary[300],
    },
    selectedSecondary: {
      backgroundColor: theme.palette.secondary[300],
    },
  };
};

function BackdropMenuItem(props) {
  const { classes: classesProp, style: styleProp, color, selected, ...other } = props;
  const style = styleNames(
    classesProp.root,
    classesProp[`color${capitalize(color)}`],
    {
      [classesProp.selected]: selected,
      [classesProp[`selected${capitalize(color)}`]]: selected,
    },
    styleProp,
  );
  const classes = {
    text: styleNames(classesProp.text, classesProp[`text${capitalize(color)}`]),
  };
  return <MenuItem style={style} classes={classes} selected={selected} {...other} />;
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
  selected: false,
};

export default withStyles(styles, { name: 'MuiBackdropMenuItem' })(BackdropMenuItem);
