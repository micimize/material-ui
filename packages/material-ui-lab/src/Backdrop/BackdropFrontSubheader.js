import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@material-ui/core/styles/react-native-style-names';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
    delay: theme.transitions.duration.shortest,
  };

  return {
    root: {
      zIndex: theme.zIndex.appBar - 2,
      backgroundColor: theme.palette.background.paper,
      position: 'sticky',
      top: 0,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 56,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    divided: {
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: theme.palette.divider,
      transition: theme.transitions.create(['border-bottom-color'], transition),
    },
    minimized: {
      cursor: 'pointer',
      borderBottomColor: 'transparent',
    },
  };
};

function BackdropFrontSubheader(props) {
  const { classes, style: styleProp, divided, expanded, ...other } = props;
  const style = styleNames(
    classes.root,
    { [classes.divided]: divided, [classes.minimized]: !expanded },
    styleProp,
  );

  return <div style={style} {...other} />;
}

BackdropFrontSubheader.propTypes = {
  /**
   * The content of the front panel.
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
   * If `true`, a thin dividing border is included in the header.
   */
  divided: PropTypes.bool,
  /**
   * @ignore
   * If `true`, parent panel is expanded.
   */
  expanded: PropTypes.bool,
};

BackdropFrontSubheader.defaultProps = {
  divided: true,
  expanded: true,
};

BackdropFrontSubheader.muiName = 'BackdropFrontSubheader';

export default withStyles(styles, { name: 'MuiBackdropFrontSubheader' })(BackdropFrontSubheader);
