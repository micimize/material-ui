// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Paper from '@material-ui/core/Paper';

export const styles = theme => {
  return {
    root: {
      position: 'absolute',
      zIndex: 0,
      flexDirection: 'column',
      flexFlow: 'column',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  };
};

function Backdrop(props) {
  const { children, classes, style: styleProp, color, ...other } = props;

  const style = styleNames(
    classes.root,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'inherit',
    },
    styleProp,
  );

  return (
    <Paper square elevation={0} style={style} {...other}>
      {children}
    </Paper>
  );
}

Backdrop.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  style: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
};

Backdrop.defaultProps = {
  color: 'primary',
};

export default withStyles(styles, { name: 'MuiBackdrop' })(Backdrop);
