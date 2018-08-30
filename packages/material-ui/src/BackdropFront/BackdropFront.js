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
    easing: 'ease-out-expo',
  };

  return {
    root: {
      // fill remaining space not taken by back layer content
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',

      flexDirection: 'column',

      transform: [{ translateY: 0 }],
      transition: theme.transitions.create(['translateY' /*, 'flexGrow'*/], transition),
    },
    paper: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      height: '100%',
      paddingLeft: 15,
      paddingRight: 15,
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

class BackdropFront extends React.Component {
  render() {
    const {
      classes,
      style: styleProp,
      disabled,
      expanded,
      onExpand,
      children: childrenProp,
      ...other
    } = this.props;

    const style = styleNames(
      classes.root,
      {
        [classes.minimized]: !expanded,
      },
      styleProp,
    );

    const onPress = !expanded && !disabled ? onExpand : null;

    const children = React.Children.map(
      childrenProp,
      child =>
        isMuiElement(child, ['BackdropFrontSubheader', 'BackdropFrontContent'])
          ? React.cloneElement(child, { expanded })
          : child,
    );

    return (
      <View useNativeDriver style={style} onPress={onPress} {...other}>
        <Paper elevation={0} square style={classes.paper}>
          {/*<Scrim style={styleNames(classes.scrim, { [classes.scrimActive]: disabled })} />*/}
          {children}
        </Paper>
      </View>
    );
  }
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

BackdropFront.muiName = 'BackdropFront';

export default withStyles(styles, { name: 'MuiBackdropFront' })(BackdropFront);
