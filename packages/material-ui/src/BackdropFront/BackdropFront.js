// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import styleNames from '../styles/react-native-style-names';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
import { isMuiElement } from '../utils/reactHelpers';
import { View } from '../styles/extended-styles/animated';

export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
    delay: theme.transitions.duration.shortest,
  };

  return {
    root: {
      position: 'relative',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,

      // fill remaining space not taken by back layer content
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      backgroundColor: theme.palette.background.paper,

      paddingLeft: 15,
      paddingRight: 15,
      // overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',

      transition: theme.transitions.create(['flexGrow'], transition),
    },
    scrim: {
      opacity: 0,
      zIndex: -1,
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: 'rgba(255,255,255,0.5)',

      transition: theme.transitions.create('opacity', { duration: transition.duration }),
    },
    scrimActive: {
      opacity: 1,
      zIndex: theme.zIndex.appBar - 1,
    },
    minimized: {
      flexGrow: 0.0001,
    },
  };
};

function Scrim(props) {
  return <View useNativeDriver {...props} />;
}

function BackdropFront(props) {
  const {
    classes,
    style: styleProp,
    disabled,
    expanded,
    onExpand,
    children: childrenProp,
    ...other
  } = props;

  const style = styleNames(
    classes.root,
    {
      [classes.minimized]: !expanded,
    },
    styleProp,
  );

  const onClick = !expanded && !disabled ? onExpand : null;

  const children = React.Children.map(
    childrenProp,
    child =>
      isMuiElement(child, ['BackdropFrontSubheader', 'BackdropFrontContent'])
        ? React.cloneElement(child, { expanded })
        : child,
  );

  return (
    <Paper style={style} onClick={onClick} elevation={0} square {...other}>
      <Scrim style={styleNames(classes.scrim, { [classes.scrimActive]: disabled })} />
      {children}
    </Paper>
  );
}

BackdropFront.propTypes = {
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
   * If `true`, the panel will be displayed in a disabled state,
   * with a scrim overlay
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it to a minimized view.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired when minimized, non-disabled panel is clicked.
   *
   * @param {object} event The event source of the callback
   */
  onExpand: PropTypes.func,
};

BackdropFront.defaultProps = {
  expanded: true,
};

export default withStyles(styles, { name: 'MuiBackdropFront' })(BackdropFront);
